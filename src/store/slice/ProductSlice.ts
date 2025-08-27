import { getAllProducts, getSingleProduct } from "@/services/ProductService";
import { Product } from "@/types/product.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ProductState = {
  items: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  items: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getAllProducts();
    return products;
  }
);

export const fetchProductsByID = createAsyncThunk(
  "products/fetchProductsByID",
  async (id: number) => {
    const products = await getSingleProduct(id);
    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(fetchProductsByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByID.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        state.error = null;
      })

      .addCase(fetchProductsByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details";
      });
  },
});

export default productSlice.reducer;
