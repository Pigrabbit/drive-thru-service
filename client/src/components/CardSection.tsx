import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledContainer = styled.ul`
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
  cardType: string
  itemList: string[]
}

export default function CardSection(props: Props) {
  const { itemList, cardType } = props

  return (
    <StyledContainer className="card-section">
      {itemList
        .map((item, idx) => (
          <Card key={idx} cardType={cardType} name={item} />
        ))}
    </StyledContainer>
  )
}
