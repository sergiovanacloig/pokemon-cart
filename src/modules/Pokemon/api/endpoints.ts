import { APIUrl } from "api/APIEndpoints";

enum Endpoints {
  GET_POKEMONS = `/pokemon`,
}

export const endpoints = {
  GET_POKEMONS: APIUrl + Endpoints.GET_POKEMONS,
};
