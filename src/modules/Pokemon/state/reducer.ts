import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../utils/pokemon.schema";

export interface PokemonState {
  pokemonList: Pokemon[];
  loading: boolean;
  error?: Error;
}

const initialState: PokemonState = {
  pokemonList: [],
  loading: false,
};

const getPokemonsReducer: CaseReducer<PokemonState> = (state) => {
  state.loading = true;
};

const getPokemonsSuccessReducer: CaseReducer<
  PokemonState,
  PayloadAction<Pokemon[]>
> = (state, { payload }) => {
  state.loading = false;
  state.pokemonList = payload;
};

const getPokemonsErrorReducer: CaseReducer<
  PokemonState,
  PayloadAction<Error>
> = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemons: getPokemonsReducer,
    getPokemonsSuccess: getPokemonsSuccessReducer,
    getPokemonsError: getPokemonsErrorReducer,
  },
});

export const { getPokemons, getPokemonsSuccess, getPokemonsError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
