import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledInput, StyledLabel } from '../ui/styled'

const Body = styled.div`
  background-color: transparent;
  /* box-shadow: 0px 15px 15px white; */

`


export const Auth = () => {
  const [inputValue, setInputValue] = useState('')

  const onChange = e => {
    setInputValue(e.target.value)
  }
  console.log(inputValue)
  return (
    <Body>
      <StyledLabel> Hello, enter authorization code !
        <StyledInput placeholder='Enter code' type={'password'} value={inputValue} onChange={onChange}/>
      </StyledLabel>
    </Body>
  )
}
