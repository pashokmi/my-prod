import React from 'react'
import { StyledButton } from '../ui/styled'

export const NavBar = () => {
    return (
        <div>
                        <StyledButton onClick={()=> router.push('/')}>Todo list</StyledButton>
                        <StyledButton onClick={()=> router.push('/')}>Home</StyledButton>
                        <StyledButton onClick={()=> router.push('/')}>Elements list</StyledButton>
                        

        </div>
    )
}
