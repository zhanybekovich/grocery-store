import GlobalApi from "@/app/_utils/GlobalApi";
import TopCategoryList from "../_components/TopCategoryList";
import ProductList from "@/app/_components/ProductList";

async function ProductCategoryPage({ params }) {
  const productList = await GlobalApi.getProductsByCategory(
    params.categoryName
  );
  const categoryList = await GlobalApi.getCategoryList();
  return (
    <div>
      <h2 className="p-4 bg-primary text-white font-bold text-3xl text-center">
        {params.categoryName}
      </h2>
      <TopCategoryList
        categoryList={categoryList}
        selectedCategory={params.categoryName}
      />
      <div className="p-5 md:p-10">
        {productList.length > 0 ? (
          <ProductList productList={productList} />
        ) : (
          <h2 className="text-center text-2xl font-bold text-primary">
            No Product Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default ProductCategoryPage;
