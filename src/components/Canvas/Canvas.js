import React from 'react'
import dynamic from 'next/dynamic'

const BigBangStarField = dynamic(() => import('react-big-bang-star-field'), {
  ssr: false
})
const Canvas = () => {
  return (
    <BigBangStarField
      numStars={50}
      maxStarSpeed={0.1}
      scale={3}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background:'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(9,54,62,1) 100%)'
      }}
      starColor={'250, 250, 250'}
    />
  )
}

export default Canvas
