export type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: ProductRating;
};

export type ProductRating = {
  rate: number;
  count: number;
};
