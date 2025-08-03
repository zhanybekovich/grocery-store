import { Button } from "@/components/ui/button";
import Image from "next/image";

function ProductItem({ product }) {
  return (
    <div className="mt-6 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-110 hover:shadow-md transition-all ease-in-out">
      <Image
        className="h-[200px] w-[200px] object-contain"
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url}
        width={500}
        height={200}
        alt={product.name}
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <div className="flex gap-3">
        {product.sellingPrice && (
          <p className="font-bold text-lg">${product.sellingPrice}</p>
        )}
        <p
          className={`font-bold text-lg ${
            product.sellingPrice && "line-through text-gray-500"
          }`}
        >
          ${product.mrp}
        </p>
      </div>

      <Button
        variant="outline"
        className="text-primary hover:text-white hover:bg-primary cursor-pointer"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductItem;
