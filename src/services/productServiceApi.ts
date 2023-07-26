// types
import { Product, Products } from "@/types/product";
import axiosInstance from "@/utils/axiosInstance";

/**
 * get products
 *
 * @param {number} [limit=0]
 * @return {*} {Promise<Products>}
 */
export const getProductsApi = async (limit: number = 0): Promise<Products> => {
  const url = limit ? "/products?limit=" + limit : "/products";
  const { data }: { data: Products } = await axiosInstance.get(url);
  return data;
};

/**
 * get single product by id
 *
 * @param {(string | undefined)} id
 * @return {*}  {Promise<Product>}
 */
export const getProductByIdApi = async (
  id: string | undefined
): Promise<Product> => {
  const { data }: { data: Product } = await axiosInstance.get(
    "/products/" + id
  );
  return data;
};
