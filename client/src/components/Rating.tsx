import React from 'react'
import styled from 'styled-components'
import { MAX_RATING } from '../utils/constants'

const StyledContainer = styled.div`
  font-size: 18px;
  .store-content-rating-disable {
    filter: grayscale(100%);
  }
`

interface Props {
  rating: number
}

export default function Rating(props: Props) {
  const { rating } = props
  return (
    <StyledContainer className="store-content-rating">
      <span className="store-content-rating-enable">{Array(rating).fill('⭐').join('')}</span>
      <span className="store-content-rating-disable">
        {Array(MAX_RATING - rating)
          .fill('⭐')
          .join('')}
      </span>
    </StyledContainer>
  )
}
