import {
  ADD_TO_CART,
  CartActionTypes,
  CartState,
  DECREMENT_QUANTITY,
  FETCH_CART,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from './types'

const initialState: CartState = {
  cartProductList: [],
  totalPrice: 0,
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
  switch (action.type) {
    case FETCH_CART:
      return {
        cartProductList: action.payload,
        totalPrice: action.payload.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
      }
    case ADD_TO_CART:
      return { ...state }
    case INCREMENT_QUANTITY:
      return { ...state }
    case DECREMENT_QUANTITY:
      return { ...state }
    case REMOVE_FROM_CART:
      return {
        cartProductList: state.cartProductList.filter(
          (cartProduct) => cartProduct.product_id !== action.payload.product_id
        ),
        totalPrice: state.cartProductList
          .filter((cartProduct) => cartProduct.product_id !== action.payload.product_id)
          .reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
      }
    default:
      return { ...state }
  }
}
