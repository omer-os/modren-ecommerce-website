import UiProductImageGallery from "components/components/ui/gallery/UiProductImageGallery";
import Link from "next/link";

const images = [
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
];

export default function page() {
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
      </div>
    </div>
  );
}
