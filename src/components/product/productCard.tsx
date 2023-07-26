// next & packages
import Link from "next/link";
import React from "react";

// types
import { IProductCardProps } from "@/types/props";

// component
import StarRating from "../ui/starRating";

function ProductCard({ product }: IProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="relative mb-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
    >
      <a href="#">
        <img
          className="h-60 rounded-t-lg object-cover mx-auto"
          src={product.image}
          alt="product image"
        />
      </a>

      <div className="mt-4 px-5 pb-5 bg-white dark:bg-gray-800 text-slate-900 dark:text-slate-200 h-full pt-2 space-y-2">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight truncate">
            {product.title}
          </h5>
        </a>
        <div className="flex items-center">
          <span className="mr-2 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
            {product.rating.rate ?? 0}
          </span>
          {/* star rating component */}
          <StarRating rating={product.rating.rate ?? 0} />
        </div>
        <div className="flex items-center justify-between">
          <p className="space-x-2">
            <span className="text-2xl font-bold">$249</span>
            <span className="text-sm line-through">$299</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
