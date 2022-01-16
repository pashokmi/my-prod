import React from 'react'
import styled from 'styled-components'

const ItemLi = styled.li`
  display: flex;
  border-bottom: 1px solid #000;
`
const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  margin: 0;
  padding: 3px;
`
const ItemBtn = styled.button`
  border: none;
  cursor: pointer;
  /* border-radius: 20px; */
  background-color: transparent;
  padding: 10px;
  position: relative;
  font-size: 0;
  background-image: url('/delete.png');
  background-size: contain;
  width: 37px;
  height: 37px;
`
const ItemP = styled.p`
  margin: 0;
  font-style: italic;
  padding: 0 5px;
`
const ItemNum = styled.span`
  margin-right: 5px;
  padding-right: 5px;
  font-weight: bold;
`
const ItemDivs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TodoItem = ({ post, number, remove }) => {
  return (
    <ItemLi>
      <ItemDiv>
        <ItemDivs>
          <ItemNum>{number}.</ItemNum>
          <ItemP>{post.value}</ItemP>
        </ItemDivs>
        <ItemBtn onClick={() => remove(post)}>Delete</ItemBtn>
      </ItemDiv>
    </ItemLi>
  )
}
export default TodoItem
