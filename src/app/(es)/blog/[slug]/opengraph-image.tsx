import { ImageResponse } from "next/og";
import { getPost } from "@/content/blog/posts";

export const runtime = "edge";
export const alt = "Artículo del blog de Driva Dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  const [lead, accent] = post?.ogHeadline ?? ["Blog de", "Driva Dev"];
  const category = post?.category ?? "Blog";
  const readingMinutes = post?.readingMinutes;

  const footer = readingMinutes
    ? `${category} · ${readingMinutes} min de lectura · drivadev.com.ar`
    : "Desarrollo web a medida · drivadev.com.ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0908",
          padding: "88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, width: "8px", height: "100%", background: "#EA580C" }} />
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "44px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#EA580C",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: "30px", fontFamily: "sans-serif" }}>D</span>
          </div>
          <span style={{ color: "white", fontSize: "38px", fontWeight: 700, fontFamily: "sans-serif" }}>
            Driva<span style={{ color: "#EA580C" }}>Dev</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: 1.12,
            marginBottom: "32px",
            fontFamily: "sans-serif",
            maxWidth: "960px",
          }}
        >
          <span style={{ color: "#FED7AA" }}>{lead}&nbsp;</span>
          <span style={{ color: "#EA580C" }}>{accent}</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "26px", fontFamily: "sans-serif" }}>
          {footer}
        </div>
      </div>
    ),
    { ...size }
  );
}
