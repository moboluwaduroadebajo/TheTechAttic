import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  image: string | StaticImageData;
  category: string;
  description: string;
  price: number;
  rating: ProductRating;
};

export type ProductRating = {
  rate: number;
  count: number;
};
