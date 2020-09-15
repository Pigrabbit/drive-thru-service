import React from 'react'
import styled from 'styled-components'
import { NUM_CARD_IN_SECTION } from '../utils/constants'
import CardSection from './CardSection'

const StyledContainer = styled.div`
  margin: 10px;
  padding: 10px;

  .carousel-header {
    margin: 15px;
    font-size: 36px;
  }
  
  .carousel-arrow {
    filter: invert(70%)
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
      <h1 className="carousel-header">{name}</h1>
      <div className="card-section-body">
        <img className="carousel-arrow" src={`${process.env.PUBLIC_URL}/img/icons/arrow_left.svg`} />
        <div className="carousel-slider">
          {[...Array(NUM_CARD_IN_SECTION).keys()].map((sectionIdx) => (
            <CardSection
              cardType={cardType}
              itemList={itemList.filter(
                (item, idx) => ~~(idx / NUM_CARD_IN_SECTION) === sectionIdx
              )}
            />
          ))}
        </div>
        <img className="carousel-arrow" src={`${process.env.PUBLIC_URL}/img/icons/arrow_right.svg`} />
      </div>
    </StyledContainer>
  )
}
