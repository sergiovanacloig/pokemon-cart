import { Avatar, Box, Heading } from "@chakra-ui/react";
import styles from "./card.module.scss";

export interface CardProps {
  name: string;
}

const Card = ({ name }: CardProps) => (
  <Box
    as="li"
    w="full"
    border="1px solid grey"
    rounded="lg"
    p={10}
    textAlign="center"
    bg="white"
  >
    <Avatar
      size="xl"
      src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      mb={4}
      pos="relative"
    />
    <Heading fontSize="2xl" fontFamily="body" className={styles.title}>
      {name}
    </Heading>
  </Box>
);

export default Card;
