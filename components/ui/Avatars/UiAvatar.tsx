import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

const UiAvatarStyles = cva("relative mx-auto", {
  variants: {
    variant: {
      circle:
        "rounded-full group-hover:ring-4 ring-0 transition-all ring-offset-3 dark:ring-offset-black ring-offset-white ring-orange-500 ",
      rounded: "rounded-md",
    },

    textSize: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },

    size: {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-16 h-16",
    },

    bold: {
      true: "font-bold",
    },
  },

  defaultVariants: {
    variant: "circle",
    size: "md",
    textSize: "sm",
  },
});

interface UiAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof UiAvatarStyles> {
  src: string;
  alt: string;
  label?: string;
  selected?: boolean;
}

export default function UiAvatar(props: UiAvatarProps) {
  const styles = UiAvatarStyles({
    variant: props.variant,
    size: props.size,
    className: props.className,
    textSize: props.textSize,
  });
  return (
    <div
      className={`flex group text-center transition-all min-w-max transition-all flex-col`}
    >
      <div {...props} className={styles}>
        <Image
          src={props.src}
          alt={props.alt}
          fill
          className={`w-full h-full rounded-full object-cover ring-0 transition-all ${
            props.selected &&
            "ring-4 ring-offset-3 ring-offset-white ring-orange-500"
          }`}
        />
      </div>
      <p
        className={`${
          (props.textSize, props.bold && "!font-bold")
        } mt-1 justify-self-center capitalize font-normal transition-all`}
      >
        {props.label}
      </p>
    </div>
  );
}
