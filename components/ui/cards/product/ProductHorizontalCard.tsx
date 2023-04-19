import Image from "next/image";
import Link from "next/link";
import React from "react";
import LayoutAnimationWrapper from "../../animations/LayoutAnimationWrapper";

interface ProductCardProps {
  className?: string;
  title: string;
  price: number;
  image: string;
  link: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <LayoutAnimationWrapper>
      <Link
        href={props.link}
        className={`flex flex-col gap-2 group ${props.className}`}
      >
        <div className="relative rounded-xl h-[20em] w-full overflow-hidden">
          <Image
            fill
            className="rounded-xl transition-all object-cover group-hover:scale-110 object-center w-full h-full"
            src={props.image}
            alt={`product image of ${props.title}`}
          />
        </div>

        <div className="flex flex-col">
          <div className="text-2xl font-bold capitalize line-clamp-2">
            {props.title}
          </div>
          <div className="text-zinc-400">{props.price}</div>
        </div>
      </Link>
    </LayoutAnimationWrapper>
  );
}
