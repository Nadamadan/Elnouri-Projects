import type { ComponentProps } from "react";

/**
 * The correct colores positions:
 * Top Left: #cdd9ff
 * Top Right: #056839
 * Solid: #222222
 */

export const RadialGradient = ({
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: `
          radial-gradient(circle at top left, #cdd9ff, transparent 50%),
          radial-gradient(circle at top right, #056839, transparent 50%)
        `,
      }}
      {...props}
    >
      <div className="absolute inset-0 backdrop-blur-3xl" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
};
