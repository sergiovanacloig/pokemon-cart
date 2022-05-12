import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { fetchPokemonList } from "../state/services";
import { Pokemon } from "../utils/pokemon.schema";
import Card from "./components/Card";
import style from "./pokemonList.module.scss";

const PokemonList = () => {
  const dispatch: AppDispatch = useDispatch();

  const { pokemonList, loading } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (loading) return <Spinner color="tomato" />;

  return (
    <ul className={style.list}>
      {pokemonList.map((pokemon: Pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} />
      ))}
    </ul>
  );
};

export default PokemonList;
