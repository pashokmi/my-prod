import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const StyledH = styled.h3`
  text-align: center;
  font-size: 32px;
  color: #59d0d0;
`
const TodoList = ({ posts, title, remove }) => {
  return (
    <div>
      <StyledH>{title}</StyledH>
      <ul>
        {posts.map((post, index) => (
          <TodoItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
