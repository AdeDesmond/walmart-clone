import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface GridOptionsProps {
  title: string;
  imageUrl?: string;
  className?: string;
}

export const GridOptions = ({
  title,
  imageUrl,
  className,
}: GridOptionsProps) => {
  {
    /* the pathname and the query are pointing to the search route or search functionality  */
  }
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn("grid-option relative", className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-cover"
        />
      )}
    </Link>
  );
};

//
