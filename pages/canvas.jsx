import React from 'react'
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('../src/components/Canvas/Canvas'), {
  ssr: false
})
const Todo = () => {
  return (
    <>
      <Canvas />
    </>
  )
}

export default Todo
