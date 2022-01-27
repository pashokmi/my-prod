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
  &:disabled {
    background-color: #40726b;
  }
`
export const StyledInput = styled.input`
  width: 100%;
  max-width: 100%;
  min-width: 300px;
  border: none;
  background-color: white;
  padding: 15px 20px;
  border-radius: 20px;
  outline: none;
  margin-bottom: 10px;
  font-size: 16px;
  color: teal;
  &::placeholder {
    font-size: 16px;
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
  font-size: 26px;
  margin: 0;
  color: red;
`
export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1220px;
  margin: 0 auto;
`
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  min-width: 320px;

  background: radial-gradient(
    circle,
    hsla(199, 47%, 57%, 1) 0%,
    hsla(214, 24%, 28%, 1) 50%,
    hsla(0, 0%, 0%, 1) 100%
  );
`
