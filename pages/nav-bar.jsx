import { StyledButton } from "../src/ui/styled";
import { useRouter } from 'next/router'

export default function Todo  ()  {
    const router = useRouter()

    return (
        <div>
            <StyledButton onClick={()=> router.push('/todo')}>Todo list</StyledButton>
        </div>
    )
}
