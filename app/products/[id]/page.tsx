import UiButton from "components/components/ui/buttons/UiButton";
import UiProductImageGallery from "components/components/ui/gallery/UiProductImageGallery";
import UiProductColor from "components/components/ui/tabs/buttongroup/UiProductColor";
import UiProductSize from "components/components/ui/tabs/buttongroup/UiProductSize";
import Link from "next/link";

const images = [
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
];

type PageProps = {
  searchParams: {
    color?: string;
  };
};

export default function page(props: PageProps) {
  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <UiProductImageGallery />
      <div className="flex lg:w-5/6 flex-col">
        <div className="lg:text-5xl text-4xl font-bold capitalize">
          sport wear neon
        </div>
        <div className="flex mt-5 justify-between items-center">
          <Link href="/">something</Link>

          <div className="">$49,99</div>
        </div>

        <div className="text-zinc-400 sm:mt-4 mt-2 sm:text-xl">
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>

        <div className="flex items-center justify-between flex-wrap mt-6 ">
          <div className="flex flex-col mt-5">
            <div className="font-bold">Size:</div>

            <div className="mt-3">
              <UiProductSize sizes={["S", "M", "L", "XL"]} />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <div className="font-bold">Color:</div>

            <div className="mt-3">
              <UiProductColor
                colors={["DC2626", "E891B2", "10B981", "0EA5E9"]}
              />
            </div>
          </div>
        </div>

        <UiButton rounded={"full"} className="mt-10" w={"full"}>
          Add To Card
        </UiButton>
      </div>
    </div>
  );
}
