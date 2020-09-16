import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 16.7vw 83.3vw;
`

const StyledDashboard = styled.div`
  margin: 10px;
  padding: 10px;
`

export default function CategoryPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [name, setName] = useState('')

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/category/${id}`, {
        method: 'GET',
      })
      const data = await result.json()
      setName(data.name)
    }

    fetchData()
  }, [])

  return (
    <StyledContainer className="category-page">
      <Sidebar />
      <StyledDashboard className="category-dashboard">
        <h1>{name}</h1>
      </StyledDashboard>
    </StyledContainer>
  )
}
