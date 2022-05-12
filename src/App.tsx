import React, { Suspense } from "react";
import { Box, Center, Container, Heading } from "@chakra-ui/react";

const PokemonModule = React.lazy(() => import("modules/Pokemon"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box as="section" h="100%" bg="#f0f0f0">
        <Center
          as="header"
          h="100px"
          bg="tomato"
          color="white"
        >
          <Heading as="h2" size="xl" noOfLines={1}>
            POKEMON APP
          </Heading>
        </Center>
        <Container maxW="container.lg">
          <PokemonModule />
        </Container>
      </Box>
    </Suspense>
  );
}

export default App;
