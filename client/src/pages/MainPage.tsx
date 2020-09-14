import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import CardSection from '../components/CardSection'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

export default function MainPage() {
  const categoryList = ['Fastfood', 'Asian', 'Dessert']
  const recommendList = ['bhc', 'starbucks', 'tteokbokki']
  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <div>
        <CardSection name="Category" cardType="category" itemList={categoryList} />
        <CardSection name="Recommend" cardType="store" itemList={recommendList} />
      </div>
    </StyledContainer>
  )
}
