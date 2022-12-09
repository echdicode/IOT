import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';


export type Product = {
  id: any;
  address: string;
  fire_center: any;
  city:any;
  code: string;
  startAt: Date;
};

export interface ProductSliceState {
  products: Product[];
  error: null | object;
  loading: boolean,
}

const products: Product[] | [] = [];

const initialState: ProductSliceState = {
  products: products,
  error: null,
  loading: false,
};

export const getProducts = createAsyncThunk('/getAll', async () => {
  try {
    const  {data} = await publicAxios.get('/getAll');
    console.log(data)
    return data;
  } catch (error: any) {
    const message = setError(error);
    toast.error(message);
  }
});

export const productListSlice = createSlice({
  name: 'products-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productListSlice;
