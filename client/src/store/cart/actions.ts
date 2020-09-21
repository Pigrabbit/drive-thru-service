import {
  ADD_TO_CART,
  CartActionTypes,
  CartProductType,
  DECREMENT_QUANTITY,
  FETCH_CART,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from './types'

// action creators
export function fetchCart(cartProductList: CartProductType[]): CartActionTypes {
  return {
    type: FETCH_CART,
    payload: cartProductList
  }
}


export function addToCart(newProduct: CartProductType): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: newProduct,
  }
}

export function incrementQuantity(updatedProduct: CartProductType): CartActionTypes {
  return {
    type: INCREMENT_QUANTITY,
    payload: updatedProduct,
  }
}

export function decrementQuantity(updatedProduct: CartProductType): CartActionTypes {
  return {
    type: DECREMENT_QUANTITY,
    payload: updatedProduct,
  }
}

export function removeFromCart(id: number): CartActionTypes {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}
