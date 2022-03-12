import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { RootState } from './store'

// 重新定义useSelector, 解决RootState的耦合问题, 方便useSelector复用
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector