import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
  height: 100vh;
`

const StyledDashboard = styled.div`
  margin: 10px;
  padding: 10px;
  animation: slide-in 500ms ease-in-out;

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
  }
`

export type ProductType = {
  id: number
  store_id: number
  name: string
  price: number
  thumbnail_src: string
  description: string
}

export default function StorePage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [name, setName] = useState<string>('')
  const [productList, setProductList] = useState<ProductType[]>()

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/store/${id}`, {
        method: 'GET',
      })
      const data = await result.json()
      setName(data.name)
    }
    fetchData()
  }, [id])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/store/${id}/menu`, {
        method: 'GET',
      })
      const data = await result.json()
      setProductList(data)
    }
    fetchData()
  }, [id])

  return (
    <StyledContainer>
      <Sidebar />
      <StyledDashboard className="store-dashboard">
        <h1>{name}</h1>
        {!productList ? <p>loading...</p> : <ProductList productList={productList} />}
      </StyledDashboard>
    </StyledContainer>
  )
}
