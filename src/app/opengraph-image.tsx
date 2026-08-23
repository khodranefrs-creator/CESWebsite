import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ClearEdge Solutions — precision connectivity manufacturing";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d10",
          padding: 72,
          color: "#f2f4f3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              background: "#4fe3cd",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 8,
              color: "#a8afb8",
              textTransform: "uppercase",
            }}
          >
            ClearEdge Solutions, Inc.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 4,
              width: 160,
              background: "#4fe3cd",
              marginBottom: 40,
            }}
          />
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Precision connects
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: "#4fe3cd",
            }}
          >
            what&rsquo;s next.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#78818d",
            textTransform: "uppercase",
          }}
        >
          <div>Fiber Optic · Copper · Electro-Mechanical</div>
          <div>San Jose, CA</div>
        </div>
      </div>
    ),
    size,
  );
}
