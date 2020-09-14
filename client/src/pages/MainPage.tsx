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
  const recommendList = []
  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <div>
        <CardSection name="Category" itemList={categoryList} />
        <CardSection name="Recommended" itemList={categoryList} />
      </div>
    </StyledContainer>
  )
}
