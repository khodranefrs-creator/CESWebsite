import Image from "next/image";
import mainlogo from "@/assets/mainlogo.png";

/**
 * The single official ClearEdge Solutions logo asset.
 * Displayed only via size/position — the artwork itself is never
 * recolored, cropped, or altered. Static import gives Next.js the
 * intrinsic 3:2 dimensions (1536×1024) for zero-layout-shift rendering
 * and automatic responsive variants.
 */
export function BrandLogo({
  className = "",
  priority = false,
  sizes = "72px",
}: {
  className?: string;
  priority?: boolean;
  /** Rendered CSS width hint so next/image serves right-sized variants. */
  sizes?: string;
}) {
  return (
    <Image
      src={mainlogo}
      alt="ClearEdge Solutions"
      priority={priority}
      draggable={false}
      sizes={sizes}
      className={className}
    />
  );
}
