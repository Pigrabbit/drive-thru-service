import React, { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { toggleModalState, TOGGLE_MODAL } from '../store/modal/types'
import { ProductType } from '../pages/StorePage'
import Modal from './Modal'
import ProductRow from './ProductRow'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

const StyledContainer = styled.ul`
  width: 100%;
`

interface Props {
  productList: ProductType[]
}

export default function ProductList(props: Props) {
  const { productList } = props
  const [clickedProductId, setClickedProductId] = useState<number>(-1)
  const dispatch = useDispatch()
  const { isVisible } = useSelector<RootState, toggleModalState>(
    (rootState) => rootState.modal, shallowEqual
  )

  const clickProductHandler = (e: MouseEvent) => {
    const id = e.currentTarget.id.split('-')[1]
    setClickedProductId(parseInt(id))
    dispatch({ type: TOGGLE_MODAL, payload: { isVisible: true } })
  }

  const clickModalOutsideHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLDivElement).classList.contains('modal-overlay')) return
    dispatch({ type: TOGGLE_MODAL, payload: { isVisible: false } })
  }

  return (
    <StyledContainer className="product-list">
      {productList.length > 0 ? (
        productList.map((product, idx) => (
          <ProductRow key={idx} product={product} onClick={clickProductHandler} />
        ))
      ) : (
        <p>준비중입니다...</p>
      )}
      {clickedProductId > 0 && isVisible ? (
        <Modal
          product={productList.filter((product) => product.id === clickedProductId)[0]}
          clickModalOutsideHandler={clickModalOutsideHandler}
        />
      ) : null}
    </StyledContainer>
  )
}
