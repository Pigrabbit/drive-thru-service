import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'

const StyledContainer = styled.aside`
  background-color: #efeded;
  height: 100vh;
`

export default function Sidebar() {
  return (
    <StyledContainer className="sidebar">
      <div className="user-info"> User1</div>
      <NavList />
    </StyledContainer>
  )
}
