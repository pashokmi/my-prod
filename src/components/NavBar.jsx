import React from 'react'
import styled from 'styled-components'

const NavBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 45%;
  height: 100px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid teal;
  background-color: #f5f5f5;
  transition: all 0.5s ease-out;

  :hover {
    background-color: #727272;
    color: white;
  }
`

export const NavBar = () => {
  return (
    <NavBody>
      <Card onClick={() => router.push('/')}>Todo list</Card>
      <Card onClick={() => router.push('/')}>Home</Card>
      <Card onClick={() => router.push('/')}>Elements list</Card>
    </NavBody>
  )
}
