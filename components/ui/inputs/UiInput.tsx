import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineSearch } from "react-icons/ai";

const inputStyles = cva("relative rounded-md text-zinc-400", {
  variants: {
    variant: {
      bordered:
        "border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 bg-white",
    },

    w: {
      full: "w-full",
    },
  },

  defaultVariants: {
    variant: "bordered",
  },
});

interface UiInputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  topLabel?: string;
  placeholder?: string;
  endIcon?: React.ReactNode;
}

export default function UiInput(props: UiInputProps) {
  const { topLabel, placeholder, variant, w, ...rest } = props;

  return (
    <div
      className={inputStyles({
        variant,
        w,
      })}
    >
      <input
        type={"text"}
        className="w-full bg-transparent py-2 px-3 rounded-md h-full pr-8"
        placeholder={placeholder}
        {...rest}
      />

      <div className="absolute top-2.5 right-2">
        <AiOutlineSearch />
      </div>
    </div>
  );
}
