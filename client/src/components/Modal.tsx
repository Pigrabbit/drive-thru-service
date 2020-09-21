import React, { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ProductType } from '../pages/StorePage'
import { CartProductType, FETCH_CART } from '../store/cart/types'
import { MOCK_CART_ID } from '../utils/constants'
import { COLOR } from '../utils/style'

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
`
const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 50%;
  height: 70%;
  padding: 10px;
  display: grid;
  grid-template-rows: 70% auto auto auto;
  grid-gap: 5px;
  animation: slideUp 400ms ease-in-out;

  @keyframes slideUp {
    0% {
      transform: translate(-50%, 0%);
    }
  }

  .modal-product-thumbnail {
    object-fit: contain;
    width: 100%;
    /* height: 100%; */
    justify-self: center;
  }

  .modal-product-order-btn {
    padding: 5px;
    width: 100%;
    height: 48px;
    background-color: ${COLOR.orange};
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`

interface Props {
  product: ProductType
  clickModalOutsideHandler: (e: MouseEvent<HTMLDivElement>) => void
}

export default function Modal(props: Props) {
  const { id, name, description, thumbnail_src } = props.product
  const dispatch = useDispatch()

  const clickOrderButtonHandler = async () => {
    const body = {
      productId: id,
      quantity: 1,
    }
    let result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    let data = await result.json()
    if (!data.success) return
    result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/${MOCK_CART_ID}`, {
      method: 'GET',
    })
    const fetchedData: CartProductType[] = await result.json()
    dispatch({ type: FETCH_CART, payload: fetchedData })
  }

  return (
    <StyledContainer className="modal-overlay" onClick={props.clickModalOutsideHandler}>
      <StyledModal className="modal">
        <img
          className="modal-product-thumbnail"
          src={thumbnail_src}
          alt={`modal-product-${name}`}
        />
        <h4 className="modal-product-name">{name}</h4>
        <p className="modal-product-description">{description}</p>
        <button className="modal-product-order-btn" onClick={clickOrderButtonHandler}>
          장바구니에 담기
        </button>
      </StyledModal>
    </StyledContainer>
  )
}
