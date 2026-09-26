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
          backgroundColor: "#F7F5F0",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#20201E",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#5F5C56",
            marginTop: 28,
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Software engineering for web applications and connected systems
        </div>
      </div>
    ),
    { ...size },
  );
}
