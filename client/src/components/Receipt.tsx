import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../utils/style'
import CartProductItem from './CartProductItem'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../store'
import { CartState } from '../store/cart/types'

const StyledContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  background-color: ${COLOR.darkerGray};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .card-product-list {
    padding: 10px;
  }
`

export default function Receipt() {
  const { cartProductList } = useSelector<RootState, CartState>(
    (rootState) => rootState.cart, shallowEqual
  )

  return (
    <StyledContainer className="receipt">
      <ul className="card-product-list">
        {cartProductList.map((cartProduct, idx) => (
          <CartProductItem key={idx} cartProduct={cartProduct} />
        ))}
      </ul>
    </StyledContainer>
  )
}
