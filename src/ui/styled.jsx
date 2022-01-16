import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 20px;
  padding: 15px;
  background-color: #fff;
  color: #000;
  margin: 0auto;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #abbac3;
  }
  &:disabled{
    background-color: #40726b;
  }
`
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  outline: none;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  color: teal;
  &::placeholder {
    font-size: 16px;
    text-align: center;
    color: teal;
  }
`

export const StyledLabel = styled.h1`
  color: #2bd3c48c;
  font-size: 25;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const StyledBold = styled.p`
  font-size: 16px;
  color: red;
`
export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  min-height: 100vh;
  min-width: 320px;
  max-width: 1220px;
  background-image: linear-gradient(145deg, var(--shade3), var(--shade2));
`
