import React, { useState } from 'react'
import {
  Container,
  StyledButton,
  StyledInput,
  StyledLabel
} from '../../ui/styled'
import styled from 'styled-components'
import TodoList from './TodoList'

const TodoLabel = styled.label`
  padding-left: 20px;
  color: teal;
`
const Todos = () => {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')

  console.log(value)
  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      value
    }
    setPosts([...posts, newTask])
    setValue('')
  }

  const removePost =(post) => {
    if(confirm('Вы хотите удалить задачу?')){
      setPosts(posts.filter(p => p.id !== post.id))
    }
    
  }
  return (
    <Container>
      <StyledLabel> Todo List</StyledLabel>
      <form>
        <TodoLabel>
          Enter the name of the task!
          <StyledInput
            type={'text'}
            placeholder="Enter the name of the task!"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </TodoLabel>
        <StyledButton
          onClick={addNewTask}
          disabled={value.length < 1 ? true : false}
        >
          Add Task
        </StyledButton>
      </form>
      <TodoList remove={removePost} posts={posts} title="Todo List" />
    </Container>
  )
}
export default Todos
