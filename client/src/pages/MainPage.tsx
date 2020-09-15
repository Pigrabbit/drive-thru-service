import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import { CATEGORY_LIST, RECOMMEND_LIST } from '../utils/constants'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
`

export default function MainPage() {
  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <div className="main-dashboard">
        <Carousel name="Category" cardType="category" itemList={CATEGORY_LIST} />
        {/* <Carousel name="Recommend" cardType="store" itemList={RECOMMEND_LIST} /> */}
      </div>
    </StyledContainer>
  )
}
