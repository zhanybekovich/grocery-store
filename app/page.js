import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();

  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList productList={productList} />
    </div>
  );
}
