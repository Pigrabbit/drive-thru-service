import React from 'react'
import styled from 'styled-components'

import {COLOR} from '../utils/style'

const StyledContainer = styled.div`
  margin-top: 10px;
  padding: 10px 30px 15px 30px;
  width: 100%;
  
  p {
    margin-top: 10px;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${COLOR.darkGray}
  }
`

export default function UserPanel() {
  const mockUsername = 'Pigrabbit'
  return (
    <StyledContainer className="user-panel">
      <img
        className="user-thumbnail"
        src={`${process.env.PUBLIC_URL}/img/icons/account.svg`}
        alt="user-thumbnail"
      />
      <p className="user-panel-username">{mockUsername}</p>
    </StyledContainer>
  )
}
