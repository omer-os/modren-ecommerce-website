"use client";
import { VariantProps, cva } from "class-variance-authority";

const buttonStyles = cva(
  `py-2 px-3 rounded flex justify-center gap-2 active:scale-95 transition-all active:brightness-90 hover:brightness-110 fill-white brightness-100`,
  {
    variants: {
      variant: {
        yellowButton: `bg-yellow-300 text-black`,
        WhiteButton: `bg-white text-black  hover:brightness-90`,
        blackButton: `bg-black text-white hover:bg-white hover:text-black hover:ring-3 ring-black`,
      },

      font: {
        bold: `font-bold`,
      },

      textSize: {
        md: `text-md`,
        sm: `text-sm`,
        lg: `text-lg`,
        xl: `text-xl`,
      },

      paddingX: {
        sm: `px-3`,
        md: `px-4`,
        lg: `px-5`,
        xl: `px-6`,
      },

      paddingY: {
        sm: `py-2`,
        md: `py-3`,
        lg: `py-4`,
        xl: `py-5`,
      },

      w: {
        full: `w-full`,
        max: `max-w-max`,
      },

      rounded: {
        md: `rounded-md`,
        full: `rounded-full`,
      },
    },

    defaultVariants: {
      variant: "yellowButton",
      font: "bold",
      textSize: "md",
      paddingX: "lg",
      paddingY: "md",
      rounded: "md",
      w: "max",
    },
  }
);

interface UiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  onClick?: any;
  className?: string;
}

export default function UiButton(ptops: UiButtonProps) {
  const styles = buttonStyles({
    className: ptops.className,
    variant: ptops.variant,
    font: ptops.font,
    textSize: ptops.textSize,
    paddingX: ptops.paddingX,
    paddingY: ptops.paddingY,
    rounded: ptops.rounded,
    w: ptops.w,
  });

  return (
    <button {...ptops} className={styles} onClick={ptops.onClick}>
      {ptops.startIcon}
      {ptops.children}
      {ptops.endIcon}
    </button>
  );
}
