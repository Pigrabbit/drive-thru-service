import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
`

export default function CategoryPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  
  return (
    <StyledContainer className="category-page">
      <Sidebar />
      <div className="category-dashboard">
        <h1>Category Page</h1>
        <p>id: {id}</p>
      </div>
    </StyledContainer>
  )
}
