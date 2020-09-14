import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import CardSection from '../components/CardSection'
import { CATEGORY_LIST, RECOMMEND_LIST } from '../utils/constants'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

export default function MainPage() {
  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <div className="main-dashboard">
        <CardSection name="Category" cardType="category" itemList={CATEGORY_LIST} />
        <CardSection name="Recommend" cardType="store" itemList={RECOMMEND_LIST} />
      </div>
    </StyledContainer>
  )
}
