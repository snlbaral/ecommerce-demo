// next & packages
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// components
import Carousel from "@/components/product/carousel";
import ProductCard from "@/components/product/productCard";
import Services from "@/components/product/services";
import Testimonials from "@/components/product/testimonials";
import WhoWeAre from "@/components/product/whoWeAre";

// data
import { banners } from "@/data/banners";

// api
import { getProductsApi } from "@/services/productServiceApi";

export default function Home() {
  // no of products to fetch
  const [productLimit, setProductLimit] = useState<number>(4);

  // get products lists
  const {
    isLoading,
    isSuccess,
    isError,
    data: products,
  } = useQuery(["products", productLimit], () => getProductsApi(productLimit));

  return (
    <main className="bg-white dark:bg-black mb-24">
      <div className="container mx-auto">
        {/* Banner */}
        <Carousel images={banners} />

        {/* products card */}
        <div className="container mx-auto pb-16 px-4 pt-8">
          <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
          <div className="flex flex-wrap justify-between lg:grid lg:grid-cols-4 lg:gap-x-4">
            {isSuccess &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        </div>

        <WhoWeAre />

        <Testimonials />

        <Services />

        {/* */}
      </div>
    </main>
  );
}
