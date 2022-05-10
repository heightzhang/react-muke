import { createStore } from "redux"
import languageReducer from './language/languageReducer'
import { productDetailSlice } from "./productDetail/slice"
import { productSearchSlice } from "./productSearch/slice"

import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  language: languageReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer
})

// const store = createStore(rootReducer)
const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store