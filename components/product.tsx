import { Organic } from "@/typings/search-typings";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "lucide-react";

export const Product = ({ product }: { product: Organic }) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        {product?.price.currency}
        {product?.price?.price}
      </p>
      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
      )}
      {product.rating && (
        <p className="flex items-center gap-x-1">
          {product.rating.rating}{" "}
          <StarIcon className="h-4 w-4 text-amber-500" />
          <span>({product.rating.count})</span>
        </p>
      )}
    </Link>
  );
};
