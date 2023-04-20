"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UiProductSizeProps = {
  sizes: string[];
};

export default function UiProductSize(props: UiProductSizeProps) {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  // const [selectedColor, setSelectedColor] = useState(
  //   searchParams.get("color") || props.colors[0]
  // );

  // function setColorValue(value: string) {
  //   const params = searchParams ? new URLSearchParams(searchParams) : undefined;
  //   if (params) {
  //     params.set("color", value);
  //     router.replace(`${pathname}?${params}`);
  //   }
  // }

  // get context

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [selectedSize, setSelectedSize] = useState(
    searchParams.get("size") || props.sizes[0]
  );

  function setSizeValue(value: string) {
    const params = searchParams ? new URLSearchParams(searchParams) : undefined;
    if (params) {
      params.set("size", value);
      router.replace(`${pathname}?${params}`);
    }
  }

  return (
    <div className="flex gap-3">
      {props.sizes.map((i, index) => (
        <button
          value={i}
          key={i + index}
          className={`bg-zinc-300 w-10  h-10 dark:ring-white ring-0 ring-black rounded-full flex items-center justify-center 
            ring-offset-2 ring-offset-white transition-all dark:ring-offset-black text-black ${
              selectedSize === i && "!ring-2 font-bold"
            }
          `}
          onClick={() => {
            setSelectedSize(i);
            setSizeValue(i);
          }}
        >
          {i}
        </button>
      ))}
    </div>
  );
}
