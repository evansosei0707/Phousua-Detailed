/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og"
// import font from "../fonts/Inter-Bold.ttf"

import fs from "fs"
import path from "path"

async function loadFont(fontPath: string) {
  // Use an absolute path to ensure consistency
  const fullPath = path.resolve(process.cwd(), fontPath)

  try {
    // Check if file exists before reading
    await fs.promises.access(fullPath)
    return fs.promises.readFile(fullPath)
  } catch (error) {
    console.error(`Font file not found: ${fullPath}`)
    throw error
  }
}

export default async function generateOpenGraphImage({
  title,
  description,
  imageUrl,
}: {
  title: string
  description?: string
  imageUrl?: string
}) {
  // Preload fonts
  const interBold = await loadFont("fonts/Inter-Bold.ttf")
  const interRegular = await loadFont("fonts/Inter-Bold.ttf")
  // const [interBold, interRegular] = await Promise.all([
  //   loadFont(new URL("../fonts/Inter-Bold.ttf", import.meta.url)),
  //   loadFont(new URL("../fonts/Inter-Bold.ttf", import.meta.url)),
  // ])

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          position: "relative",
          backgroundColor: "#f4f4f4",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage:
              "radial-gradient(circle at center, #e0e0e0 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            padding: "60px",
            color: "#333",
          }}
        >
          {/* Optional image on the right */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Featured"
              style={{
                position: "absolute",
                right: "60px",
                top: "60px",
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
          )}

          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              margin: "0",
              lineHeight: "1.2",
              maxWidth: imageUrl ? "70%" : "100%",
            }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              style={{
                fontSize: "32px",
                color: "#666",
                margin: "20px 0 0",
                maxWidth: imageUrl ? "70%" : "100%",
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
        },
      ],
    }
  )
}
