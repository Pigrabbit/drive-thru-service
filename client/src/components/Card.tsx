import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.li`
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  p {
    margin-top: 10px;
  }
  img {
    width: 300px;
  }
`
interface Props {
  name: string
  cardType: string
}

export default function Card(props: Props) {
  const { name, cardType } = props
  return (
    <StyledContainer className="card">
      <img src={`${process.env.PUBLIC_URL}/img/${cardType}/${name}.jpg`} alt="" />
      <p>{name}</p>
    </StyledContainer>
  )
}
