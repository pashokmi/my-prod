import React from 'react'
import dynamic from 'next/dynamic'

const StarfieldAnimation = dynamic(() => import('react-starfield-animation'), {
  ssr: false
})
const Stars = () => {
  return (
    <>
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '1'
        }}
        numParticles={400}
        particleSpeed={0}
        dx={0.000000001}
        dy={0.000000001}
      />
    </>
  )
}

export default Stars
