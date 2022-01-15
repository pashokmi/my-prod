import styled from "styled-components"

export const StyledInput = styled.input `
width: 100%;
border: none;
background-color: white;
padding: 15px;
border-radius: 20px;
outline: none;
margin-bottom: 10px;
`


export const StyledLabel = styled.h1`
  color: white;
  font-size:25;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`
export const StyledButton = styled.button`
  border-radius: 20px;
  padding: 15px;
  background-color: #fff;
  color: #000;
  margin: 0auto;
  cursor: pointer;
  &:hover{
    background-color: #abbac3;
  }

`