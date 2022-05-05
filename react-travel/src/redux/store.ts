import { createStore } from "redux"
import languageReducer from './language/languageReducer'

import { productDetailSlice } from "./productDetail/slice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  language: languageReducer,
  productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export default store