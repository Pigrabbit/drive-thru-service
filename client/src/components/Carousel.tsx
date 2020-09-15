import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { NUM_CARD_IN_SECTION } from '../utils/constants'

const StyledContainer = styled.div`
  margin: 10px;
  padding: 10px;

  .carousel-header {
    margin: 10px;
    font-size: 36px;
  }

  .carousel-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .carousel-slider::-webkit-scrollbar {
    display: none;
  }

  .card-section-body {
    display: flex;
  }

  .card-section-list {
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`

interface Props {
  name: string
  cardType: string
  itemList: string[]
}

export default function Carousel(props: Props) {
  const { name, cardType, itemList } = props

  return (
    <StyledContainer className="carousel">
      <h1 className="carosel-header">{name}</h1>
      <div className="card-section-body">
        <button className="card-section-body-back-btn">
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_left.svg`} />
        </button>
        <div className="carousel-slider">
          {[...Array(NUM_CARD_IN_SECTION).keys()].map((section) => (
            <ul className="card-section-list">
              {itemList
                .filter((item, idx) => ~~(idx / NUM_CARD_IN_SECTION) === section)
                .map((item, idx) => (
                  <Card key={idx} cardType={cardType} name={item} />
                ))}
            </ul>
          ))}
        </div>
        <button className="card-section-body-next-btn">
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_right.svg`} />
        </button>
      </div>
    </StyledContainer>
  )
}
