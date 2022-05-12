import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "modules/Pokemon/state/reducer";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
