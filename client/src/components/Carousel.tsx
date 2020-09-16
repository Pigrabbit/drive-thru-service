import React, { MouseEvent, useRef } from 'react'
import styled from 'styled-components'
import { CategoryType } from '../pages/MainPage'
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
    img {
      filter: invert(70%);
    }
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
  itemList: CategoryType[]
}

export default function Carousel(props: Props) {
  const { name, itemList } = props
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const leftArrowClickHandler = (e: MouseEvent) => {
    if (!sliderRef || !sliderRef.current) return
    sliderRef.current.scrollTo({
      top: 0,
      left: sliderRef.current.scrollLeft - sliderRef.current.clientWidth,
      behavior: 'smooth'
    })
  }

  const rightArrowClickHandler = (e: MouseEvent) => {
    if (!sliderRef || !sliderRef.current) return
    sliderRef.current.scrollTo({
      top: 0,
      left: sliderRef.current.scrollLeft + sliderRef.current.clientWidth,
      behavior: 'smooth'
    })
  }

  return (
    <StyledContainer className="carousel">
      <h1 className="carousel-header">{name}</h1>
      <div className="card-section-body">
        <button className="carousel-arrow" onClick={leftArrowClickHandler}>
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_left.svg`} />
        </button>
        <div className="carousel-slider" ref={sliderRef}>
          {[...Array(NUM_CARD_IN_SECTION).keys()].map((sectionIdx) => (
            <CardSection
              key={sectionIdx}
              id={`card-section${sectionIdx}`}
              itemList={itemList.filter(
                (item, idx) => ~~(idx / NUM_CARD_IN_SECTION) === sectionIdx
              )}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={rightArrowClickHandler}>
          <img src={`${process.env.PUBLIC_URL}/img/icons/arrow_right.svg`} />
        </button>
      </div>
    </StyledContainer>
  )
}
