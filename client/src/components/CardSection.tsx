import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledContainer = styled.section`
  margin: 10px;
  padding: 10px;

  h1 {
    margin: 10px;
    font-size: 36px;
  }
  
  .card-section-body {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    flex: 0 0 auto;
    overflow-x: auto;
    width: auto;
  }
  
`

interface Props {
  name: string
  itemList: string[]
}

export default function CardSection(props: Props) {
  const { name, itemList } = props

  return (
    <StyledContainer className="card-section">
      <h1 className="card-section-header">{name}</h1>
      <div className="card-section-body">
        <button className="card-section-body-back-btn">
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_left.svg`} />
        </button>
        <ul className="store-section-list">
          {itemList.map((item, idx) => (
            <Card key={idx} name={item} />
          ))}
        </ul>
        <button className="card-section-body-next-btn">
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_right.svg`} />
        </button>
      </div>
    </StyledContainer>
  )
}
