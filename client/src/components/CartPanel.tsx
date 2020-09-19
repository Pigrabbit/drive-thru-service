import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../utils/style'

const StyledContainer = styled.aside`
  margin: 10px;
  padding: 30px 10px;
  span {
    font-size: 36px;
  }
  .receipt {
    margin: 10px 0;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    background-color: ${COLOR.darkerGray};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .checkout-btn {
    padding: 10px;
    width: 100%;
    text-align: center;
    background-color: ${COLOR.orange};
    color: #fff;
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`
export default function CartPanel() {
  return (
    <StyledContainer className="cart-panel">
      <span className="material-icons">shopping_cart</span>
      <div className="receipt"></div>
      <button className="checkout-btn">checkout</button>
    </StyledContainer>
  )
}
