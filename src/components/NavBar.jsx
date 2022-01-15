import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/styled'

const NavBody = styled.div`
  display: flex;
`
export const NavBar = () => {
  return (
    <NavBody>
      <StyledButton onClick={() => router.push('/')}>Todo list</StyledButton>
      <StyledButton onClick={() => router.push('/')}>Home</StyledButton>
      <StyledButton onClick={() => router.push('/')}>
        Elements list
      </StyledButton>
    </NavBody>
  )
}
