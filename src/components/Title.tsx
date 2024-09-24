import { cva } from "class-variance-authority";

interface TitleProps {
  text?: string;
  className?: string;
  as?: "h1" | "h3";
}

const variants = cva("text-center capitalize leading-tight tracking-tight", {
  variants: {
    variant: {
      h1: "text-2xl font-bold sm:text-3xl md:text-4xl",
      h3: "text-xl font-semibold sm:text-2xl md:text-3xl",
    },
  },
  defaultVariants: {
    variant: "h3",
  },
});

export const Title = ({ text, className, as = "h1" }: TitleProps) => {
  const TitleComp = as;
  return (
    <TitleComp
      className={variants({
        variant: as,
        className,
      })}
    >
      {text}
    </TitleComp>
  );
};
