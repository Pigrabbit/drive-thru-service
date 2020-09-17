import React from 'react'
import styled from 'styled-components'
import { StoreType } from '../pages/CategoryPage'
import { StyledLink } from '../utils/StyledLink'
import StoreRate from './StoreRate'

const StyledContainer = styled.li`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  a {
    display: grid;
    grid-template-columns: 3fr 9fr;
  }
  .store-thumbnail {
    width: 150px;
    justify-self: center;
  }
  .store-content {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    &-name {
      font-size: 28px;
      font-weight: 600;
    }
  }
`

interface Props {
  id: number
  store: StoreType
}

export default function StoreRow(props: Props) {
  const { id, store } = props
  const { name, rating, description, thumbnail_src } = store
  return (
    <StyledContainer id={`store-${id}`} className="store-row">
      <StyledLink to={`/store/${id}`}>
        <img className="store-thumbnail" src={thumbnail_src} alt={`store-thumbnail-${name}`} />
        <div className="store-content">
          <StoreRate rating={rating} />
          <h3 className="store-content-name">{name}</h3>
          <p>{description}</p>
        </div>
      </StyledLink>
    </StyledContainer>
  )
}
