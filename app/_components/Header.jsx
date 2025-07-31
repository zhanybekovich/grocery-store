"use client";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
import { useEffect, useState } from "react";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => setCategoryList(res.data.data));
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={150} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Brows Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category) => (
              <DropdownMenuItem
                key={category.documentId}
                className="flex items-center gap-2 cursor-pointer"
              >
                {" "}
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon.url
                  }
                  alt={category.icon}
                  width={25}
                  height={25}
                />
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden ">
          <Search />
          <input type="text" placeholder="Search..." className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
