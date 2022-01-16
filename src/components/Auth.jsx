import React, { useState } from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import {
  StyledButton,
  StyledInput,
  StyledBold,
  StyledLabel
} from '../ui/styled'
import { Loader } from './Loader'

const Body = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Auth = () => {
  const [inputValue, setInputValue] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [error, setError] = useState('')

  const buttonHandler = (e) => {
    if (inputValue === 'qwerty') {
      setConfirm(!confirm)
    } else {
      setError('Пароль не верный!')
    }
  }
  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <>
      {confirm ? (
        <NavBar />
      ) : (
        <Body>
          <Loader/>
          <StyledLabel> Hello, enter authorization code ! </StyledLabel>
          <StyledInput
            placeholder="Enter code"
            type={'password'}
            value={inputValue}
            onChange={onChange}
          />
          <StyledBold>{error}</StyledBold>
          <StyledButton onClick={buttonHandler}>Enter</StyledButton>
        </Body>
      )}
    </>
  )
}
