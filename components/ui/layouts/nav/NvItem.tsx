"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NvItem(props: {
  children: React.ReactNode;
  href: string;
}) {
  const [Hovered, setHovered] = useState(false);

  const path = usePathname();

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="py-2 px-4 rounded relative"
      href={props.href}
    >
      <span className="relative z-10">{props.children}</span>
      {Hovered && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-zinc-300 dark:bg-zinc-800 rounded"
          layoutId="pjiepurouriyer"
        />
      )}

      {path === props.href && (
        <motion.div
          className="absolute -bottom-[.8em] rounded-full w-full left-0 h-1 bg-red-600"
          layoutId="nwernnboueor"
        />
      )}
    </Link>
  );
}
