// app/api/webhooks/shopify-orders/route.ts
import { NextRequest, NextResponse } from "next/server"

const SHAQ_BASE_URL = "https://testv2.shaqexpress.com/v2/public"
const SHAQ_API_TOKEN = process.env.SHAQ_EXPRESS_API_KEY || ""

const STORE_PICKUP_COORDINATES = {
  lat: "5.6816309",
  lng: "-0.1928964",
}

const STORE_PHONE = "0277103031"
const PACKAGE_TYPE = "Fashion"

export async function POST(req: NextRequest) {
  try {
    const order = await req.json()
    console.log("📦 New order received:", order)

    const shippingMethod = order.shipping_lines?.[0]?.title
    if (shippingMethod !== "Local Delivery by ShaQ Express") {
      return NextResponse.json({ message: "Not using ShaQ Express" })
    }

    const recipient = order.shipping_address
    const orderId = order.id.toString()

    const tripRequest = {
      package_type: PACKAGE_TYPE,
      delivery_notes: `Deliver to ${recipient.name}`,
      pickup_phone_number: STORE_PHONE,
      pickup_lat: STORE_PICKUP_COORDINATES.lat,
      pickup_lng: STORE_PICKUP_COORDINATES.lng,
      reference: orderId,
      amount_paid: order.total_price,
      drop_offs: [
        {
          phone: recipient.phone || order.phone || "+233000000000",
          lat: recipient.latitude || "5.5600", // fallback if not in payload
          lng: recipient.longitude || "-0.2050",
        },
      ],
    }

    // 1. Get pricing
    const pricingResponse = await fetch(`${SHAQ_BASE_URL}/trips/trip-pricing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SHAQ_API_TOKEN}`,
      },
      body: JSON.stringify(tripRequest),
    })

    const pricingData = await pricingResponse.json()

    console.log("✅ Pricing data received:", pricingData)

    const trackingNumber = pricingData.data?.tracking_number
    const priceOption = pricingData.data?.prices?.[0]

    if (!trackingNumber || !priceOption?.id) {
      console.error("❌ Pricing or price ID not found:", pricingData)
      return NextResponse.json(
        { error: "Failed to fetch pricing or price ID" },
        { status: 500 }
      )
    }

    // 2. Book the trip
    const bookingResponse = await fetch(`${SHAQ_BASE_URL}/trips/book-trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SHAQ_API_TOKEN}`,
      },
      body: JSON.stringify({
        tracking_number: trackingNumber,
        price_id: priceOption.id,
      }),
    })

    const bookingData = await bookingResponse.json()
    console.log("✅ Trip booked with ShaQ Express:", bookingData)

    return NextResponse.json({
      message: "ShaQ Express trip booked successfully",
      tracking: trackingNumber,
    })
  } catch (err) {
    console.error("❌ Error booking trip:", err)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
