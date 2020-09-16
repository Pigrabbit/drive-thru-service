import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import StoreList from '../components/StoreList'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
`

const StyledDashboard = styled.div`
  margin: 10px;
  padding: 10px;
`

export type StoreType = {
  id: number
  category_id: number
  name: string
  phone: string
  latitude: number
  longitude: number
  address: string
  open_at: string
  cloase_at: string
  rating: number
  description: string | null
  thumbnail_src: string
}

export default function CategoryPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [name, setName] = useState<string>('')
  const [storeList, setStoreList] = useState<StoreType[]>()

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/category/${id}`, {
        method: 'GET',
      })
      const data = await result.json()
      setName(data.name)
    }

    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/store?categoryId=${id}&offset=0&limit=20`,
        {
          method: 'GET',
        }
      )
      const data = await result.json()
      setStoreList(data)
    }

    fetchData()
  }, [])

  return (
    <StyledContainer className="category-page">
      <Sidebar />
      <StyledDashboard className="category-dashboard">
        <h1>{name}</h1>
        {!storeList ? <p>loading...</p> : <StoreList storeList={storeList}/>}
      </StyledDashboard>
    </StyledContainer>
  )
}
