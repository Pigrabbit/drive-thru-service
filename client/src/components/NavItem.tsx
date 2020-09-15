import React from 'react'
import styled from 'styled-components'

import { COLOR } from '../utils/style'

const StyledContainer = styled.li`
  padding: 0 15px;
  margin-bottom: 4px;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  align-items: center;

  img {
    filter: invert(50%)
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${COLOR.darkGray};
  }
`

interface Props {
  name: string
}

export default function NavItem(props: Props) {
  const { name } = props
  return (
    <StyledContainer className="nav-item">
      <img src={`${process.env.PUBLIC_URL}/img/icons/${name}.svg`} alt={`${name}-icon`} />
      <span className="nav-item-text">{name}</span>
    </StyledContainer>
  )
}
