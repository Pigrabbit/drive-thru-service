import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../utils/style'
import { CartProductType } from '../store/cart/types'
import CartProductItem from './CartProductItem'
import { store } from '..'

const StyledContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  background-color: ${COLOR.darkerGray};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .card-product-list{
    padding: 10px;
  }
`

export default function Receipt() {
  const { cartProductList } = store.getState().cart
  return (
    <StyledContainer className="receipt">
      <ul className="card-product-list">
        {cartProductList.map((cartProduct, idx) => (
          <CartProductItem key={idx} cartProduct={cartProduct}/>
        ))}
      </ul>
    </StyledContainer>
  )
}
