import { combineReducers } from 'redux'
import { cartReducer } from './cart/reducer'
import { modalReducer } from './modal/reducer'

export const rootReducer = combineReducers({
  modal: modalReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
