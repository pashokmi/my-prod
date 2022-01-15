import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* box-shadow: 0px 15px 15px white; */
`
 const StyledInput = styled.input `
width: 100%;
border: none;
background-color: white;
padding: 15px;
border-radius: 20px;
outline: none;
margin-bottom: 10px;
`

 const StyledLabel = styled.h1`
  color: white;
  font-size:25;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`
 const StyledButton = styled.button`
  border-radius: 20px;
  padding: 15px;
  background-color: #fff;
  color: #000;
  margin: 0auto;
  cursor: pointer;
  width: 100%;
  &:hover{
    background-color: #abbac3;
  }

`
export const Auth = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const buttonHandler = (e) => {
    if (inputValue) {
      router.push('/nav-bar')
    } else {
      setError(!error)
    }
  }
  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  console.log(inputValue)
  return (
    <Body>
      <StyledLabel> Hello, enter authorization code ! </StyledLabel>

      <StyledInput
        placeholder="Enter code"
        type={'password'}
        value={inputValue}
        onChange={onChange}
      />
      <b style={{color:'red', marginBottom:'10px'}}>{setError ? 'Не верный пароль' : 'wern'}</b>
      <StyledButton onClick={buttonHandler}>Enter</StyledButton>
    </Body>
  )
}
