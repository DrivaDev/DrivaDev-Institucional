import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contacto y presupuesto de desarrollo web | Driva Dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "52px" }}>
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
            fontSize: "66px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "32px",
            fontFamily: "sans-serif",
            maxWidth: "900px",
          }}
        >
          <span style={{ color: "#FED7AA" }}>Hablemos de&nbsp;</span>
          <span style={{ color: "#EA580C" }}>tu proyecto.</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "26px", fontFamily: "sans-serif", letterSpacing: "0.01em" }}>
          Contacto · Respuesta en menos de 24 horas · drivadev.com.ar
        </div>
      </div>
    ),
    { ...size }
  );
}
