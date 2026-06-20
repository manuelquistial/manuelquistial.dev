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
          backgroundColor: "#0b0d12",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#5b8def",
            marginBottom: 16,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#e8eaed",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9aa3b2",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Full-Stack · AI · Neuroengineering
        </div>
      </div>
    ),
    { ...size },
  );
}
