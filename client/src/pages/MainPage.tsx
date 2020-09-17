import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
  height: 100vh;

  .main-dashboard {
    animation: slide-in 500ms ease-in-out;

    @keyframes slide-in {
      0% {
        transform: translateX(100%);
      }
    }
  }
`

export type CategoryType = {
  id: number
  name: string
  thumbnail_src: string
}

export default function MainPage() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/category`, {
        method: 'GET',
      })
      const data = await result.json()
      setCategoryList(data)
    }

    fetchData()
  }, [])

  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <div className="main-dashboard">
        <Carousel name="Category" itemList={categoryList} />
      </div>
    </StyledContainer>
  )
}
