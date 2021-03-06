import React from 'react'
import styled from 'styled-components'
import { MOCK_CART_ID } from '../utils/constants'
import { CartProductType, FETCH_CART, REMOVE_FROM_CART } from '../store/cart/types'
import { useDispatch } from 'react-redux'

const StyledContainer = styled.li`
  margin: 10px 0;
  padding: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  
  .cart-product-item-content {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0 10px;
    }
  }
  .cart-product-item-controller {
    width: 60%;
    justify-self: end;
    display: flex;
    justify-content: space-evenly;
  }
  .cart-product-item-quantity-controller {
    display: flex;
    margin: 0 10px;
    &-btn {
      margin: 0 5px;
      font-size: 18px;
    }
  }
`

interface Props {
  cartProduct: CartProductType
}

export default function CartProductItem(props: Props) {
  const { product_id, name, price, quantity } = props.cartProduct
  const dispatch = useDispatch()

  const clickIncrementButtonHandler = async () => {
    if (quantity >= 10) {
      alert('최대 주문 수량입니다')
      return
    }
    const body = {
      quantity: quantity + 1,
    }
    let result = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}/${product_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
    const data = await result.json()
    if (!data.success) return
    result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}`, {
      method: 'GET',
    })
    const fetchedData: CartProductType[] = await result.json()
    dispatch({ type: FETCH_CART, payload: fetchedData })
  }

  const clickDecrementButtonHandler = async () => {
    if (quantity <= 1) {
      alert('최소 주문 수량입니다')
      return
    }
    const body = {
      quantity: quantity - 1,
    }
    let result = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}/${product_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
    const data = await result.json()
    if (!data.success) return
    result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}`, {
      method: 'GET',
    })
    const fetchedData: CartProductType[] = await result.json()
    dispatch({ type: FETCH_CART, payload: fetchedData })
  }

  const clickRemoveButtonHandler = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}/${product_id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await result.json()
    if (!data.success) return
    dispatch({ type: REMOVE_FROM_CART, payload: { product_id } })
  }

  return (
    <StyledContainer className="cart-product-item">
      <div className="cart-product-item-content">
        <p className="cart-product-name">{name}</p>
        <p className="cart-product-price">{price}</p>
      </div>
      <div className="cart-product-item-controller">
        <div className="cart-product-item-quantity-controller">
          <button
            className="cart-product-item-quantity-controller-btn"
            onClick={clickIncrementButtonHandler}
          >
            +
          </button>
          <button
            className="cart-product-item-quantity-controller-btn"
            onClick={clickDecrementButtonHandler}
          >
            -
          </button>
        </div>
        <p className="cart-product-quantity">{quantity}</p>
        <button className="cart-product-item-btn" onClick={clickRemoveButtonHandler}>
          remove
        </button>
      </div>
    </StyledContainer>
  )
}
