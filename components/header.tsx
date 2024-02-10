"use client";
import { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid2X2,
  HeartIcon,
  LayoutGridIcon,
  SearchIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getTotalProduct } from "@/lib/get-cart-total";
export const Header = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getTotalProduct(cart);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.search.value;
    router.push(`/search?q=${inputValue}`);
  };
  return (
    <header className="bg-sky-500 flex flex-col md:flex-row px-10 py-7 space-x-4 items-center">
      <Link href="/" className="flex items-center text-2xl text-white">
        <Image
          src={"https://links.papareact.com/xsi"}
          alt="logo"
          height={150}
          width={150}
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        action=""
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="searh for everything"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button className="bg-amber-500 rounded-full" type="submit">
          <SearchIcon className="rounded-full h-10 px-2 w-10  cursor-pointer" />
        </button>
      </form>
      <div className="flex space-x-5 pb-5 md:p-0">
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Deparment</p>
        </Link>
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGridIcon size={20} />
          <p>Services</p>
        </Link>
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <HeartIcon size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My items</p>
          </div>
        </Link>
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign in</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href="/basket"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCartIcon size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "No items"}
            </p>
            <p>${total}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
