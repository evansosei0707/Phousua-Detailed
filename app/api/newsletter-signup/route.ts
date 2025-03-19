/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    const klaviyoResponse = await subscribeToKlaviyo(email)

    if (klaviyoResponse.success) {
      return NextResponse.json(
        { success: true, message: "Successfully subscribed to newsletter" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: klaviyoResponse.message || "Failed to subscribe",
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Klaviyo API error:", error)
    return NextResponse.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    )
  }
}

async function subscribeToKlaviyo(email: string) {
  const apiKey = process.env.KLAVIYO_PRIVATE_API_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey || !listId) {
    return {
      success: false,
      message: "Klaviyo credentials are not configured properly",
    }
  }

  try {
    // Create a profile first
    const createProfileResponse = await fetch(
      "https://a.klaviyo.com/api/profiles/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Revision: "2023-10-15",
          Authorization: `Klaviyo-API-Key ${apiKey}`,
        },
        body: JSON.stringify({
          data: {
            type: "profile",
            attributes: {
              email: email,
            },
          },
        }),
      }
    )

    const profileResponseText = await createProfileResponse.text()
    let profileResult

    try {
      profileResult = JSON.parse(profileResponseText)
    } catch (e) {
      console.error("Failed to parse profile response:", profileResponseText)
      return {
        success: false,
        message: "Failed to create profile in Klaviyo",
      }
    }

    if (!createProfileResponse.ok) {
      console.error("Klaviyo profile creation error:", profileResult)
      // If the profile already exists, we can still proceed with subscription
      if (
        !(
          profileResult.errors &&
          profileResult.errors[0]?.code === "duplicate_profile"
        )
      ) {
        return {
          success: false,
          message:
            profileResult.errors?.[0]?.detail || "Failed to create profile",
        }
      }
    }

    // Get the profile ID (either from the new profile or by looking it up)
    let profileId

    if (createProfileResponse.ok) {
      profileId = profileResult.data.id
    } else {
      // Look up the existing profile
      const lookupResponse = await fetch(
        `https://a.klaviyo.com/api/profiles/?filter=equals(email,"${email}")`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Revision: "2023-10-15",
            Authorization: `Klaviyo-API-Key ${apiKey}`,
          },
        }
      )

      const lookupResult = await lookupResponse.json()

      if (
        !lookupResponse.ok ||
        !lookupResult.data ||
        lookupResult.data.length === 0
      ) {
        return {
          success: false,
          message: "Failed to find profile in Klaviyo",
        }
      }

      profileId = lookupResult.data[0].id
    }

    // Subscribe the profile to the list
    const subscribeResponse = await fetch(
      `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Revision: "2023-10-15",
          Authorization: `Klaviyo-API-Key ${apiKey}`,
        },
        body: JSON.stringify({
          data: [
            {
              type: "profile",
              id: profileId,
            },
          ],
        }),
      }
    )

    const subscribeResponseText = await subscribeResponse.text()
    let subscribeResult

    try {
      // This might be empty for a successful subscription
      subscribeResult = subscribeResponseText
        ? JSON.parse(subscribeResponseText)
        : {}
    } catch (e) {
      console.error(
        "Failed to parse subscription response:",
        subscribeResponseText
      )
      subscribeResult = {}
    }

    if (subscribeResponse.ok) {
      return { success: true }
    } else {
      console.error("Klaviyo subscription error:", subscribeResult)
      return {
        success: false,
        message:
          (subscribeResult.errors && subscribeResult.errors[0]?.detail) ||
          "Failed to subscribe to list",
      }
    }
  } catch (error) {
    console.error("Error calling Klaviyo API:", error)
    return {
      success: false,
      message: "Failed to connect to Klaviyo",
    }
  }
}
