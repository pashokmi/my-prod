import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ posts, title, remove }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {window.posts.map((post, index) => (
          <TodoItem remove={remove} number={index + 1} post={post} key={post.id} />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
