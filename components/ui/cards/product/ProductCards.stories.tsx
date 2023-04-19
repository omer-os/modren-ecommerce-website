import ProductHorizontalCard from "./ProductHorizontalCard";
import ProductVerticalCard from "./ProductVerticalCard";

export default {
  title: "ui/Cards/Product",
  component: ProductHorizontalCard,
};

export const Horizontal = () => {
  return (
    <div className="grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      <ProductHorizontalCard
        image="https://i.ibb.co/7bQQYkX/jean.jpg"
        title="Jean"
        price={100}
        link="/"
      />
      <ProductHorizontalCard
        image="https://i.ibb.co/7bQQYkX/jean.jpg"
        title="Jean"
        price={100}
        link="/"
      />
      <ProductHorizontalCard
        image="https://i.ibb.co/7bQQYkX/jean.jpg"
        title="Jean"
        price={100}
        link="/"
      />
    </div>
  );
};
// export const Vertical = () => (
//   <div className="flex gap-4">
//     <ProductVerticalCard />
//     <ProductVerticalCard />
//     <ProductVerticalCard />
//   </div>
// );
