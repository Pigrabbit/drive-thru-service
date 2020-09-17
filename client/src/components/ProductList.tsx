import React, { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { ProductType } from '../pages/StorePage'
import Modal from './Modal'
import ProductRow from './ProductRow'

const StyledContainer = styled.ul`
  width: 100%;
`

interface Props {
  productList: ProductType[]
}

export default function ProductList(props: Props) {
  const { productList } = props
  const [clickedProductId, setClickedProductId] = useState<number>(-1)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const clickProductHandler = (e: MouseEvent) => {
    const id = e.currentTarget.id.split('-')[1]
    setClickedProductId(parseInt(id))
    setIsModalVisible(true)
  }

  const clickModalOutsideHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLDivElement).classList.contains("modal-overlay")) return
    setIsModalVisible(false)
  }

  return (
    <StyledContainer className="product-list">
      {productList.length > 0 ? (
        productList.map((product, idx) => (
          <ProductRow key={idx} product={product} onClick={clickProductHandler}/>
        ))
      ) : (
        <p>준비중입니다...</p>
      )}
      {(clickedProductId > 0 && isModalVisible)? (
        <Modal
          product={productList.filter((product) => product.id === clickedProductId)[0]}
          clickModalOutsideHandler={clickModalOutsideHandler}
        />
      ) : null}
    </StyledContainer>
  )
}
