import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledInput, StyledLabel, StyledButton } from '../ui/styled'

const Body = styled.div`
  background-color: transparent;
  display:flex;
  flex-wrap: wrap;
    justify-content: center;

  /* box-shadow: 0px 15px 15px white; */

`


export const Auth = () => {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()
  const buttonHandler = ()=>{
    router.push('/nav-bar')
  }
  const onChange = e => {
    setInputValue(e.target.value)
  }
  console.log(inputValue)
  return (
    <Body>
      <StyledLabel> Hello, enter authorization code !      </StyledLabel>

        <StyledInput placeholder='Enter code' type={'password'} value={inputValue} onChange={onChange}/>
      <StyledButton onClick={buttonHandler}>Enter</StyledButton>
    </Body>
  )
}
