import Image from "next/image";
import Link from "next/link";

function TopCategoryList({ categoryList, selectedCategory }) {
  return (
    <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
      {categoryList.map((category) => (
        <Link
          href={"/product-category/" + category.name}
          key={category.documentId}
          className={`flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200 w-[150px] min-w-[100px] ${
            selectedCategory === category.name && "bg-green-600 text-white"
          }`}
        >
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon.url}
            alt={category.name}
            width={50}
            height={50}
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <span
            className={`${
              selectedCategory === category.name && "text-white"
            } text-green-800`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default TopCategoryList;
