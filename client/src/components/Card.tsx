import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.li`
  margin: 0 10px;
  padding: 5px;
  width: 30%;
  height: 100%;
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
