"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/slice/ProductSlice";
import NavBar from "@/components/NavBar";
import MenuCard from "@/components/MenuCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  // const { items, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [
    {
      label: "Groceries",
    },
    {
      label: "Fashion",
    },
    {
      label: "Electronics",
    },
    {
      label: "Food",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="border-y border-gray mt-4 py-4 lg:px-20 px-6 overflow-auto flex gap-4">
        {categories.map((category, index) => (
          <MenuCard key={index} label={category.label} />
        ))}
      </div>
      <Hero />

      <Footer />
    </div>
  );
}
