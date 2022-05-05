import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null
}

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    fetchStart: (state: any) => {
      state.loading = true;
    },
    fetchSuccess: (state: any, action: any) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchFail: (state: any, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})