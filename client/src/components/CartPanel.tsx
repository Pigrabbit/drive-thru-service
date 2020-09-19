import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MOCK_CART_ID } from '../utils/constants'
import { COLOR } from '../utils/style'
import Receipt from './Receipt'

const StyledContainer = styled.aside`
  margin: 10px;
  padding: 30px 10px;
  span {
    font-size: 36px;
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

export type CartProductType = {
  id: number
  product_id: number
  name: string
  price: number
  quantity: number
}

export default function CartPanel() {
  const [cartProductList, setCartProductList] = useState<CartProductType[]>([])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}`, {
        method: 'GET',
      })
      const data = await result.json()
      setCartProductList(data)
    }

    fetchData()
  }, [])
  return (
    <StyledContainer className="cart-panel">
      <span className="material-icons">shopping_cart</span>
      <Receipt cartProductList={cartProductList}/>
      <button className="checkout-btn">checkout</button>
    </StyledContainer>
  )
}
