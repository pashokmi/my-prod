import React, { useState } from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import {
  StyledButton,
  StyledInput,
  StyledBold,
  StyledLabel
} from '../ui/styled'

const Body = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
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
  const onPressEnter = (e)=>{
    if(e.key === 'Enter'){
      buttonHandler()
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
          <StyledLabel> Hello, enter authorization code ! </StyledLabel>
          <StyledInput
            placeholder="Enter code"
            type={'password'}
            value={inputValue}
            onChange={onChange}
            onKeyPress={onPressEnter}
          />
          <StyledBold>{error}</StyledBold>
          <StyledButton onClick={buttonHandler}>Enter</StyledButton>
        </Body>
      )}
    </>
  )
}
