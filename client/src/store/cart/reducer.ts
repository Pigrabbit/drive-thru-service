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
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
  switch (action.type) {
    case FETCH_CART:
      return { cartProductList: action.payload }
    case ADD_TO_CART:
      return { cartProductList: state.cartProductList.concat(action.payload) }
    case INCREMENT_QUANTITY:
      return { ...state }
    case DECREMENT_QUANTITY:
      return { ...state }
    case REMOVE_FROM_CART:
      return {
        cartProductList: state.cartProductList.filter(
          (cartProduct) => cartProduct.id !== action.payload.id
        ),
      }
    default:
      return { ...state }
  }
}
