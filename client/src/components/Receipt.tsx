import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../utils/style'
import CartProductItem from './CartProductItem'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../store'
import { CartState } from '../store/cart/types'
import { parseToLocalMoneyString } from '../utils/parser'

const StyledContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  background-color: ${COLOR.darkerGray};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-rows: auto 20%;

  .card-product-list {
    margin: 10px;
    align-self: start;
    .cart-product-item:nth-child(odd) {
      background-color: ${COLOR.lightGray};
    }
  }

  .receipt-total {
    margin: 0 10px;
    padding: 10px 20px;
    border-top: 1px solid black;
    align-self: center;
    display: flex;
    justify-content: space-between;
  }
`

export default function Receipt() {
  const { cartProductList, totalPrice } = useSelector<RootState, CartState>(
    (rootState) => rootState.cart,
    shallowEqual
  )

  return (
    <StyledContainer className="receipt">
      <ul className="card-product-list">
        {cartProductList.map((cartProduct, idx) => (
          <CartProductItem key={idx} cartProduct={cartProduct} />
        ))}
      </ul>
      <div className="receipt-total">
        <p className="receipt-total-label">Total</p>
        <p className="receipt-total-price">{parseToLocalMoneyString(totalPrice)} 원</p>
      </div>
    </StyledContainer>
  )
}
