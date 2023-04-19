import UiAvatar from "components/components/ui/Avatars/UiAvatar";
import ProductCard from "components/components/ui/cards/product/ProductHorizontalCard";
import MainNav from "components/components/ui/layouts/nav/MainNav";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const categories = [
  {
    src: "https://avatars.githubusercontent.com/u/10212025?v=4",
    alt: "avatar",
    label: "women",
  },
  {
    src: "https://avatars.githubusercontent.com/u/10212025?v=4",
    alt: "avatar",
    label: "man",
  },
  {
    src: "https://avatars.githubusercontent.com/u/10212025?v=4",
    alt: "avatar",
    label: "bussniess",
  },
  {
    src: "https://avatars.githubusercontent.com/u/22213025?v=4",
    alt: "avatar",
    label: "tshirts",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12524024?v=4",
    alt: "avatar",
    label: "others",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12263035?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/10212025?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/22213025?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12524024?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12263035?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/10212025?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/22213025?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12524024?v=4",
    alt: "avatar",
    label: "avatar",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12263035?v=4",
    alt: "avatar",
    label: "avatar",
  },
];

const sampleProducts = [
  {
    image: "https://i.ibb.co/7bQQYkX/jean.jpg",
    name: "Jean",
    price: 100,
    link: "/products/jean",
  },
  {
    image: "https://i.ibb.co/7bQQYkX/jean.jpg",
    name: "Jean",
    price: 100,
    link: "/",
  },
  {
    image: "https://i.ibb.co/7bQQYkX/jean.jpg",
    name: "Jean",
    price: 100,
    link: "/",
  },
  {
    image: "https://i.ibb.co/7bQQYkX/jean.jpg",
    name: "Jean",
    price: 100,
    link: "/",
  },
];

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default function page(props: PageProps) {
  const category = props.searchParams.category;

  return (
    <div>
      <div className="flex snap-mandatory items-center snap-x sm:gap-7 gap-3 overflow-x-scroll">
        {categories.map((i, index) => (
          <Link
            key={i.label + index}
            href={"/?category=" + i.label.replace(" ", "-")}
            className="snap-start p-3"
          >
            <UiAvatar
              alt={i.alt}
              src={i.src}
              label={i.label}
              size={"xl"}
              textSize={"xl"}
              bold={props.searchParams.category === i.label.toLowerCase()}
              selected={props.searchParams.category === i.label.toLowerCase()}
            />
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:mt-10 mt-8 gap-3">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold capitalize">
            {props.searchParams.category}
          </p>

          <Link className="hover:underline text-lg font-bold " href="/ ">
            see more
          </Link>
        </div>

        <div className="grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {sampleProducts.map((i, index) => (
            <ProductCard
              key={i.name + index}
              link={i.link}
              image={i.image}
              price={i.price}
              title={i.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
