import {
  ADD_TO_CART,
  CartActionTypes,
  CartProductType,
  DECREMENT_QUANTITY,
  FETCH_CART,
  INCREMENT_QUANTITY,
  MutateProductType,
  REMOVE_FROM_CART,
} from './types'

// action creators
export function fetchCart(cartProductList: CartProductType[]): CartActionTypes {
  return {
    type: FETCH_CART,
    payload: cartProductList,
  }
}

export function addToCart(newProduct: MutateProductType): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: newProduct,
  }
}

export function incrementQuantity(updatedProduct: MutateProductType): CartActionTypes {
  return {
    type: INCREMENT_QUANTITY,
    payload: updatedProduct,
  }
}

export function decrementQuantity(updatedProduct: MutateProductType): CartActionTypes {
  return {
    type: DECREMENT_QUANTITY,
    payload: updatedProduct,
  }
}

export function removeFromCart(product_id: number): CartActionTypes {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product_id,
    },
  }
}
