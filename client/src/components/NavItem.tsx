import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.li`
  padding: 0 15px;
  
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5px;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 600;
  }
`

interface Props {
  name: string
}

export default function NavItem(props: Props) {
  const { name } = props
  return (
    <StyledContainer className="nav-item">
      <img src={`${process.env.PUBLIC_URL}/img/nav/${name}.svg`} alt={`${name}-icon`} />
      <span className="nav-item-text">{name}</span>
    </StyledContainer>
  )
}
