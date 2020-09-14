import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'
import UserPanel from './UserPanel'

import { COLOR } from '../utils/style'

const StyledContainer = styled.aside`
  background-color: ${COLOR.lightGray};
  height: 100vh;
`

export default function Sidebar() {
  return (
    <StyledContainer className="sidebar">
      <UserPanel />
      <NavList />
    </StyledContainer>
  )
}
