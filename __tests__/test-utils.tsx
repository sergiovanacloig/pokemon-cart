import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";

const render = (ui: ReactElement) => {
  return rtlRender(<Provider store={store}>{ui}</Provider>);
};

export * from "@testing-library/react";
export { server } from "./server";
export { rest } from "msw";
export { render };
