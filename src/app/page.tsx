"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/slice/ProductSlice";

export default function Home() {
  const { items, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading......</p>}
      {items.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
}
