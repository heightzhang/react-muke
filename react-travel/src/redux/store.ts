// import { createStore } from "redux"
import languageReducer from './language/languageReducer'
import { productDetailSlice } from "./productDetail/slice"
import { productSearchSlice } from "./productSearch/slice"
import { userSlice } from "./user/slice"

import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  language: languageReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  devTools: true
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor }