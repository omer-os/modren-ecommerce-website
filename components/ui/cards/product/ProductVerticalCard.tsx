import React from "react";
import Chip from "../../chips/Chip";

type ProductVerticalCardProps = {
  className?: string;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  amount: number;
};

export default function ProductVerticalCard(props: ProductVerticalCardProps) {
  return (
    <div className="flex gap-2">
      <div className="h-[6em] w-[7em]">
        <img
          className="rounded-xl object-cover object-center w-full h-full"
          src={props.image}
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <div className="text-xl font-bold capitalize line-clamp-1">
          jeans lola jnbe oenb
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          <Chip text={"xs"}>size: {props.size} </Chip>
          <Chip text={"xs"} variant={"blue"}>
            color: {props.color}
          </Chip>
          <Chip text={"xs"} variant={"green"}>
            amount: {props.amount}
          </Chip>
        </div>

        <div className="text-zinc-400 mt-2">{props.price}</div>
      </div>
    </div>
  );
}
