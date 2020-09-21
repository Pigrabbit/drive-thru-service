export type CartProductType = {
  id: number
  product_id: number
  name: string
  price: number
  quantity: number
}

export interface CartState {
  cartProductList: CartProductType[]
  totalPrice: number
}

// Action
// 사용자가 우리 앱에서 하는 동작
// 새로 담기/수량 추가/ 빼기/ 삭제

export const FETCH_CART = 'FETCH_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export interface MutateProductType {
  product_id: number
  quantity: number
}

interface fetchCartAction {
  type: typeof FETCH_CART
  payload: CartProductType[]
}

interface addToCartAction {
  type: typeof ADD_TO_CART
  payload: MutateProductType
}

interface incrementQuantityAction {
  type: typeof INCREMENT_QUANTITY
  payload: MutateProductType
}

interface decrementQuantityAction {
  type: typeof DECREMENT_QUANTITY
  payload: MutateProductType
}

interface removeFromCartAction {
  type: typeof REMOVE_FROM_CART
  payload: {
    product_id: number
  }
}

export type CartActionTypes =
  | fetchCartAction
  | addToCartAction
  | incrementQuantityAction
  | decrementQuantityAction
  | removeFromCartAction
