import React from 'react'
import styled from 'styled-components'
import { StoreType } from '../pages/CategoryPage'
import StoreRow from './StoreRow'

const StyledContainer = styled.ul`
  width: 100%;
`

interface Props {
  storeList: StoreType[]
}

export default function StoreList(props: Props) {
  const { storeList } = props
  return (
    <StyledContainer className="store-list">
      {storeList.length > 0 ? (
        storeList.map((store, idx) => <StoreRow key={idx} id={store.id} store={store} />)
      ) : (
        <p>준비중입니다...</p>
      )}
    </StyledContainer>
  )
}
