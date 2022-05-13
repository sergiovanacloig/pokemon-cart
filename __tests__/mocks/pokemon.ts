import { Pokemon } from "modules/Pokemon/utils/pokemon.schema";

export const MOCK_POKEMON: Pokemon = {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
};

export const MOCK_POKEMON_LIST: Pokemon[] = [
  ...[MOCK_POKEMON],
  {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
  },
  {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
  },
];

export const MOCK_POKEMON_LIST_RESPONSE = {
  results: MOCK_POKEMON_LIST
}
