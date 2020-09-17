import React from 'react'
import styled from 'styled-components'
import { CategoryType } from '../pages/MainPage'
import { StyledLink } from '../utils/StyledLink'

const StyledContainer = styled.li`
  margin: 0 10px;
  padding: 5px;
  width: 30%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  p {
    margin-top: 4px;
  }
  
  img {
    width: 100%;
  }
`

interface Props {
  categoryData: CategoryType
}

export default function Card(props: Props) {
  const { id, name, thumbnail_src } = props.categoryData
  return (
    <StyledContainer id={`category-${id}`} className="card">
      <StyledLink to={`/category/${id}`}>
        <img src={thumbnail_src} alt="" />
        <p>{name}</p>
      </StyledLink>  
    </StyledContainer>
  )
}
