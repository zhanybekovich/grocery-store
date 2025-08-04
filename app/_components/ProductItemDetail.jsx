"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ProductItemDetail({ product }) {
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sellingPrice ? product.sellingPrice : product.mrp
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white text-black gap-4">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url}
        alt={product.name}
        width={300}
        height={300}
        className="bg-slate-200 p-5 h-[300px] w-[300px] object-contain rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>

        <div className="flex gap-3">
          {product.sellingPrice && (
            <p className="font-bold text-3xl">${product.sellingPrice}</p>
          )}
          <p
            className={`font-bold text-3xl ${
              product.sellingPrice && "line-through text-gray-500"
            }`}
          >
            ${product.mrp}
          </p>
        </div>
        <p className="font-medium text-lg">
          Quantity ({product.itemQuantityType})
        </p>
        <div className="flex flex-col items-baseline gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2 px-5 border flex gap-10 items-center">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <p className="text-2xl font-bold">
              {" "}
              = ${(productTotalPrice * quantity).toFixed(2)}
            </p>
          </div>
          <Button className="flex gap-3 items-center cursor-pointer">
            <ShoppingBasket />
            Add to Cart
          </Button>
        </div>
        <p>
          <span className="font-bold">Category: </span>
          {product.categories.map((category) => (
            <span key={category.documentId}>{category.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ProductItemDetail;
