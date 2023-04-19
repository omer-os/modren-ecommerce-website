"use client";
import { motion } from "framer-motion";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UiProductColorProps = {
  colors: string[];
};

export default function UiProductColor(props: UiProductColorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [selectedColor, setSelectedColor] = useState(
    searchParams.get("color") || props.colors[0]
  );

  function setColorValue(value: string) {
    const params = searchParams ? new URLSearchParams(searchParams) : undefined;
    if (params) {
      params.set("color", value);
      router.replace(`${pathname}?${params}`);
    }
  }

  return (
    <>
      <div className="flex gap-6">
        {props.colors.map((i, index) => (
          <button
            value={i}
            key={i + index}
            className={`
          w-7 relative h-7 rounded-full 
          `}
            style={{ backgroundColor: "#" + i }}
            onClick={() => {
              setSelectedColor(i);
              setColorValue(i);
            }}
          >
            {selectedColor === i && (
              <motion.div
                layoutId="jneiiureiibrourbu"
                className="absolute -inset-[.5em] border-[.25em] rounded-full"
                style={{
                  borderColor: "#" + i,
                }}
              ></motion.div>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
