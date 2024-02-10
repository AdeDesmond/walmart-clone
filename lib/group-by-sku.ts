import { Product } from "@/typings/product-typings";

//this function simply group by the id
export function groupBySku(products: Product[]): Record<string, Product[]> {
  return products.reduce(
    (acc: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;
      if (!acc[sku]) {
        acc[sku] = [];
      }
      acc[sku].push(currentProduct);
      return acc;
    },
    {}
  );
}
