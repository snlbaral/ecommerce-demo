// next & packages
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// api
import { getProductByIdApi } from "@/services/productServiceApi";

// components
import StarRating from "@/components/ui/starRating";
import ColorSwatchPicker from "@/components/ui/colorSwatchPicker";
import SizeSwatchPicker from "@/components/ui/sizeSwatchPicker";

// context
import { useGlobalContext } from "@/context/globalContext";

function ProductDetail() {
  // context
  const { updateCart } = useGlobalContext();

  // next router
  const router = useRouter();
  const id = router.query?.id as string;

  // get product by id
  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(["product", id], () => getProductByIdApi(id), {
    enabled: !!id,
  });

  return (
    <main className="bg-white dark:bg-black my-24">
      <div className="container mx-auto">
        <div className="text-gray-700 dark:text-slate-200 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* product image */}
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 max-h-[800px]"
                src={product?.image}
              />
              {/* product details */}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font  tracking-widest capitalize mb-2">
                  {product?.category}
                </h2>

                <h1 className=" text-2xl title-font font-medium mb-6">
                  {product?.title}
                </h1>

                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="mr-2 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                      {product?.rating.rate ?? 0}
                    </span>
                    <StarRating rating={product?.rating.rate ?? 0} />
                    <span className="ml-3">
                      {product?.rating.count ?? 0} Reviews
                    </span>
                  </span>
                </div>

                <p className="leading-relaxed">{product?.description}</p>

                <div className="mt-6 items-center pb-5 border-b-2 border-gray-200 dark:border-gray-700 mb-5">
                  <div className="w-3/4">
                    <ColorSwatchPicker />
                  </div>
                </div>

                <div className="mt-6 items-center pb-5 border-b-2 border-gray-200 dark:border-gray-700 mb-5">
                  <div className="w-3/4">
                    <SizeSwatchPicker />
                  </div>
                </div>

                <div className="flex mt-8">
                  <button
                    onClick={() => updateCart(product)}
                    className="flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded"
                  >
                    <ShoppingCartIcon className="w-6 h-6 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
