"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/slice/ProductSlice";
import NavBar from "@/components/NavBar";
import MenuCard from "@/components/MenuCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Tab from "@/components/Tab";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { items, loading } = useSelector((state: RootState) => state.products);
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
  console.log("items", items);

  return (
    <div>
      <NavBar />
      <div className="border-y border-gray mt-4 py-4 lg:px-20 px-6 overflow-auto flex gap-4">
        {categories.map((category, index) => (
          <MenuCard key={index} label={category.label} />
        ))}
      </div>
      <Hero />
      <Tab mainText="Grab the best deal on " spanText="Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice="$2400"
            save="$600"
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
