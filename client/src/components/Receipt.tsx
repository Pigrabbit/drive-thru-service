import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../utils/style'
import { CartProductType } from './CartPanel'

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

  .cart-product-item {
    margin-bottom: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    &-content {
      display: flex;
      justify-content: space-between;
    }
  }
`

interface Props {
  cartProductList: CartProductType[]
}

export default function Receipt(props: Props) {
  const { cartProductList } = props
  return (
    <StyledContainer className="receipt">
      <ul className="card-product-list">
        {cartProductList.map((cartProduct, idx) => (
          <li key={idx} className="cart-product-item">
            <div className="cart-product-item-content">
              <p className="cart-product-name">{cartProduct.name}</p>
              <p className="cart-product-price">{cartProduct.price}</p>
            </div>
            <div className="cart-product-item-controller">
              <p className="cart-product-quantity">{cartProduct.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledContainer>
  )
}
