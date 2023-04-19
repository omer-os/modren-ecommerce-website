import { VariantProps, cva } from "class-variance-authority";

const chipStyles = cva(
  `border transition-all py-1 px-2 flex gap-2 active:scale-90 hover:brightness-90 fill-current`,
  {
    variants: {
      variant: {
        red: "text-red-600 border-red-600 bg-red-100",
        blue: "text-blue-600 border-blue-600 bg-blue-100",
        green: "text-green-600 border-green-600 bg-green-100",
        yellow: "text-yellow-600 border-yellow-600 bg-yellow-100",
      },

      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },

      text: {
        xs: "text-[.7em]",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },

      font: {
        bold: "font-bold",
      },

      w: {
        full: "w-full",
        max: "max-w-max",
      },
    },

    defaultVariants: {
      variant: "red",
      rounded: "full",
      text: "sm",
      w: "max",
    },
  }
);

interface ChipProps extends VariantProps<typeof chipStyles> {
  children?: React.ReactNode;
  className?: string;
}

export default function Chip(props: ChipProps) {
  const style = chipStyles({
    className: props.className,
    variant: props.variant,
    rounded: props.rounded,
    text: props.text,
    w: props.w,
  });
  return <button className={style}>{props.children}</button>;
}
