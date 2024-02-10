import { fetchProduct } from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";

interface ProductPageProps {
  searchParams: {
    url: string;
  };
}

async function ProductPage({ searchParams }: ProductPageProps) {
  const product = await fetchProduct(searchParams.url);
  if (!product) return notFound();
  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={product.title + " " + i}
            width={90}
            height={90}
            className="rounded-sm border"
          />
        ))}
      </div>
      <Carousel className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20">
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    src={image}
                    alt={product.title + " " + i}
                    width={400}
                    height={400}
                    className="rounded-sm border"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <div className="space-x-2">
          {product.breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              variant="outline"
              className={breadcrumb}
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="py-5"
        />
        {product.rating && (
          <p className="text-yellow-500 text-sm flex items-center gap-x-2">
            {product.rating.rating}{" "}
            <StarIcon className="text-amber-500 w-5 h-5" />
            <span className="text-gray-500 ml-2">
              {product.rating.count} reviews
            </span>
          </p>
        )}
        <p className="text-2xl font-bold mt-2">
          {product.currency} {product.price}
        </p>
        {/* Add to cart button */}
        <AddToCart product={product} />
        <hr />
        <h3 className="font-bold text-xl pt-10">Specifications</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Specification</TableHead>
              <TableHead className="">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((spec) => (
              <TableRow key={spec.key}>
                <TableCell className="font-bold">{spec.key}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductPage;
