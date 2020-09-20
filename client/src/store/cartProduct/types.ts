// Action
// 사용자가 우리 앱에서 하는 동작
// 새로 담기/수량 추가/ 빼기/ 삭제

export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export interface addToCartState {
  productId: number
  quantity: number
}

interface addToCartAction {
  type: typeof ADD_TO_CART,
  payload: addToCartState
}

export interface updateQuantityState {
  quantity: number
}

interface incrementQuantityAction {
  type: typeof INCREMENT_QUANTITY,
  payload: updateQuantityState
}

interface decrementQuantityAction {
  type: typeof DECREMENT_QUANTITY,
  payload: updateQuantityState
}

interface removeQuantityAction {
  type: typeof REMOVE_FROM_CART
}

export type CartProductType = {
  id: number
  product_id: number
  name: string
  price: number
  quantity: number
}

export interface CartState {
  cartProductList: CartProductType[]
}
