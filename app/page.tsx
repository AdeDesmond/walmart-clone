import Image from "next/image";
import { GridOptions } from "@/components/grid-options";
export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6 flex-1">
      <GridOptions
        title={"Sweet gifts for less"}
        imageUrl={"https://links.papareact.com/1dy"}
        className="bg-pink-200 h-full md:h-32"
      />
      <GridOptions
        title={"Shop wardrobe"}
        imageUrl={"https://links.papareact.com/8ko"}
        className="bg-blue-200 col-span-2 row-span-2"
      />
      <GridOptions
        title={"Shop Home"}
        imageUrl={"https://links.papareact.com/szu"}
        className="bg-amber-200 h-64"
      />
      <GridOptions
        title={"Shop Electronics"}
        imageUrl={"https://links.papareact.com/pj2"}
        className={"bg-green-100 h-64 col-span-2"}
      />
      <GridOptions
        title={"Shop toys"}
        imageUrl={"https://links.papareact.com/1dy"}
        className="bg-green-100 h-64 col-span-2"
      />
      <GridOptions
        title={"All you need for march day"}
        imageUrl={"https://links.papareact.com/m8e"}
        className="bg-red-100 row-span-2 col-span-2"
      />
      <GridOptions
        title={"Shop gadgets"}
        imageUrl={"https://links.papareact.com/gs1"}
        className="bg-orange-100 h-64"
      />
      <GridOptions
        title={"Shop beauty"}
        imageUrl={"https://links.papareact.com/4y0"}
        className="bg-blue-100 h-64 "
      />
      <GridOptions
        title={"Shop sports"}
        imageUrl={"https://links.papareact.com/sq2"}
        className="bg-green-100 h-64 "
      />
      <GridOptions
        title={"Enjoy free shipping"}
        imageUrl={"https://links.papareact.com/9fh"}
        className="bg-green-100 h-64 "
      />
      <GridOptions
        title={"Flash deals"}
        imageUrl={"https://links.papareact.com/qx7"}
        className="bg-orange-200 h-64 col-span-2"
      />
    </div>
  );
}
