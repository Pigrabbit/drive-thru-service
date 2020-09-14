import React from 'react'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

export default function MainPage() {
  return (
    <StyledContainer className="main-page">
      <Sidebar />
      <h1>MainPage</h1>
    </StyledContainer>
  )
}
