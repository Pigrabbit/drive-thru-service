import React from 'react'
import styled from 'styled-components'
import { CategoryType } from '../pages/MainPage'
import Card from './Card'

const StyledContainer = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

interface Props {
  id: string
  itemList: CategoryType[]
}

export default function CardSection(props: Props) {
  const { id, itemList } = props

  return (
    <StyledContainer id={id} className="card-section">
      {itemList.map((item, idx) => (
        <Card key={idx} categoryData={item} />
      ))}
    </StyledContainer>
  )
}
