const getStyle = ({ to }: StyleProps) =>
  ({
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "24px",
    padding: "6px",
    background: `linear-gradient(to ${to || "bottom"}, currentColor, transparent 85%)`,
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
  }) as const;

interface StyleProps {
  to?: "top" | "bottom";
  className?: string;
}

/*
 * Rounded border with gradient
 * Reference: MDN border image: https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
 * Related issue: https://github.com/w3c/csswg-drafts/issues/9456
 * Ensure the parent element is set to relative with padding to prevent overflow
 */

export const BorderGradient = ({ className, ...props }: StyleProps) => (
  <div style={getStyle(props)} className={className} />
);
