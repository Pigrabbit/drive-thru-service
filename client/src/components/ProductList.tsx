import React from 'react'
import styled from 'styled-components'
import { ProductType } from '../pages/StorePage'
import ProductRow from './ProductRow'

const StyledContainer = styled.ul`
  width: 100%;
`

interface Props {
  productList: ProductType[]
}

export default function ProductList(props: Props) {
  const { productList } = props
  return (
    <StyledContainer className="product-list">
      {productList.length > 0 ? (
        productList.map((product, idx) => <ProductRow key={idx} product={product} />)
      ) : (
        <p>준비중입니다...</p>
      )}
    </StyledContainer>
  )
}
