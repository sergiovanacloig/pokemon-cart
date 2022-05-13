import { apiURL } from "api/APIEndpoints";

enum Endpoints {
  GET_POKEMONS = `/pokemon`,
}

export const endpoints = {
  GET_POKEMONS: apiURL + Endpoints.GET_POKEMONS,
};
