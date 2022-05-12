import { AppDispatch } from "store";
import { endpoints } from "../api/endpoints";
import { getPokemons, getPokemonsError, getPokemonsSuccess } from "./reducer";

export const fetchPokemonList = () => async (dispatch: AppDispatch) => {
  dispatch(getPokemons());
  await fetch(endpoints.GET_POKEMONS, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        const error = new Error("Server error");
        dispatch(getPokemonsError(error));
      }
      return res.json();
    })
    .then((res) => {
      dispatch(getPokemonsSuccess(res.results));
    });
};
