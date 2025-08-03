import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productList.map(
          (product, index) =>
            index < 8 && (
              <ProductItem key={product.documentId} product={product} />
            )
        )}
      </div>
    </div>
  );
}

export default ProductList;
