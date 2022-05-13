import {
  MOCK_POKEMON_LIST,
  MOCK_POKEMON_LIST_RESPONSE,
} from "../../../../__tests__/mocks/pokemon";
import {
  render,
  screen,
  rest,
  waitFor,
  server,
} from "../../../../__tests__/test-utils";
import { endpoints } from "../api/endpoints";
import PokemonList from "./";

describe("Pokemon List", () => {
  beforeEach(() => {
    server.use(
      rest.get(endpoints.GET_POKEMONS, (req, res, ctx) => {
        return res(ctx.json(MOCK_POKEMON_LIST_RESPONSE));
      })
    );
  });

  it("renders loading correctly", async () => {
    render(<PokemonList />);

    expect(screen.getByTestId("pokemon-list-loader")).toBeVisible();
  });

  it("renders list properly", async () => {
    render(<PokemonList />);

    await waitFor(() => {
      expect(screen.getByText(MOCK_POKEMON_LIST[0].name)).toBeVisible();
    });
    expect(screen.getByText(MOCK_POKEMON_LIST[1].name)).toBeVisible();
  });
});
