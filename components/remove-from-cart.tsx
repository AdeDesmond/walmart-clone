"use client";

import { useCartStore } from "@/store";
import { Product } from "@/typings/product-typings";
import { Button } from "./ui/button";
import { Minus } from "lucide-react";

interface RemoveFromCartProps {
  product: Product;
}

export const RemoveFromCart = ({ product }: RemoveFromCartProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <Button onClick={handleRemove} className="bg-sky-500 hover:bg-sky-500/90">
      <Minus className="h-5 w-5" />
    </Button>
  );
};
