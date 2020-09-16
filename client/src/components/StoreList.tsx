import React from 'react'
import styled from 'styled-components'
import { StoreType } from '../pages/CategoryPage'

const StyledContainer = styled.ul`
  img {
    width: 150px;
    justify-self: center;
  }

  li {
    margin: 10px 0;
    padding: 10px;
    display: grid;
    grid-template-columns: 3fr 9fr;
    width: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`

interface Props {
  storeList: StoreType[]
}

export default function StoreList(props: Props) {
  const { storeList } = props
  return (
    <StyledContainer className="store-list">
      {storeList.map((store, idx) => (
        <li id={`store-${store.id}`} key={idx} className="store">
          <img src={store.thumbnail_src} alt="" />
          <div className="store-content">
            <p>{store.rating}</p>
            <h3>{store.name}</h3>
            <p>{store.description}</p>
          </div>
        </li>
      ))}
    </StyledContainer>
  )
}
