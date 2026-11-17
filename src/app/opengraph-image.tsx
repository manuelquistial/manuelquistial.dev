import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#F5F6FB",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            width: 180,
            height: 180,
            borderRadius: 999,
            backgroundColor: "#FFCC38",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 200,
            bottom: 100,
            width: 140,
            height: 140,
            borderRadius: 999,
            backgroundColor: "#FF6B66",
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#6B7194",
            marginBottom: 18,
          }}
        >
          manuelquistial.dev
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#171D59",
            lineHeight: 1.05,
            maxWidth: 780,
          }}
        >
          Ideas that connect
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#4A4F7A",
            marginTop: 28,
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Software Engineer · Neuroengineering · Education
        </div>
      </div>
    ),
    { ...size },
  );
}
