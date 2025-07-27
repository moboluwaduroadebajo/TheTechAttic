"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/slice/ProductSlice";
import NavBar from "@/components/NavBar";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  // const { items, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="">
      <NavBar />
      <div className="border-y border-[#efefef] mt-4 py-4 lg:px-20 px-6 overflow-auto flex gap-4">
        <MenuCard label="Groceries" />
        <MenuCard label="Premium fruits" />
        <MenuCard label="fashion" />
        <MenuCard label="electronics" />
      </div>
    </div>
  );
}
