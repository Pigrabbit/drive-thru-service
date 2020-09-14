import React, { useState } from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledContainer = styled.ul``

export default function NavList() {
  const [navList, setNavList] = useState(['order', 'history', 'settings'])
  return (
    <StyledContainer className="nav">
      {navList.map((item, idx) => (
        <NavItem key={idx} name={item}/>
      ))}
    </StyledContainer>
  )
}
