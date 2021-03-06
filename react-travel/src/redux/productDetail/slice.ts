import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

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

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
)


export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  // reducers: {
  //   fetchStart: (state: any) => {
  //     state.loading = true;
  //   },
  //   fetchSuccess: (state: any, action: any) => {
  //     state.data = action.payload
  //     state.loading = false
  //     state.error = null
  //   },
  //   fetchFail: (state: any, action: PayloadAction<string | null>) => {
  //     state.loading = false
  //     state.error = action.payload
  //   }
  // }
  reducers: {},
  // 自动映射 fetchStart 、 fetchSuccess 、 fetchFail
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      console.log('error-123', action.payload)
      state.loading = false
      // bug: payload获取不到error.msg的值
      state.error = action.payload ? action.payload : '出现未知的错误'
    }
  }
})