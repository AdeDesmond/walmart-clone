"use client";

import { useCartStore } from "@/store";
import { Product } from "@/typings/product-typings";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { RemoveFromCart } from "./remove-from-cart";

interface AddToCartProps {
  product: Product;
}

export const AddToCart = ({ product }: AddToCartProps) => {
  const [addToCart, cart] = useCartStore((state) => [
    state.addToCart,
    state.cart,
  ]);

  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;
  const handleAddToCart = () => {
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button
          onClick={handleAddToCart}
          className="bg-sky-500 hover:bg-sky-600/90"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>
    );
  }
  return (
    <Button className="bg-sky-600/90 text-white" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};
