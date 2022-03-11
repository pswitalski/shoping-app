import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import StartingContainer from '../components/StartingContainer/StartingContainer'

const Home: NextPage = () => {
  return (
    <Container>
      <Box marginY='auto' mt={4} >
      <StartingContainer>
        Shopping App
      </StartingContainer>
    </Box>

    </Container>
  )
}

export default Home
