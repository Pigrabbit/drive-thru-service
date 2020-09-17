import React from 'react'
import styled from 'styled-components'
import { ProductType } from '../pages/StorePage'
import { parseToLocalMoneyString } from '../utils/parser'

const StyledContainer = styled.li`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  justify-items: stretch;
  align-items: center;

  img {
    width: 100%;
  }

  .product-name {
    justify-self: start;
    font-size: 18px;
    font-weight: 600;
  }

  .product-price {
    justify-self: end;
  }
`

interface Props {
  product: ProductType
}

export default function ProductRow(props: Props) {
  const { name, price, thumbnail_src } = props.product
  return (
    <StyledContainer>
      <img src={thumbnail_src} alt={`product-thumbnail-${name}`} />
      <p className="product-name">{name}</p>
      <p className="product-price">{parseToLocalMoneyString(price)} 원</p>
    </StyledContainer>
  )
}
