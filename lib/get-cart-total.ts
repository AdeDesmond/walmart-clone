import { Product } from "@/typings/product-typings";

export function getTotalProduct(products: Product[]) {
  const total = products.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  );

  return `${total.toFixed(2)}`;
}
