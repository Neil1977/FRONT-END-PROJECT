/* NEEDS CARD/COMPONENTS/ASSETS/LAYOUT/PAGES SUBFOLDERS IN DIRECTORY?/jsX file not js? */

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
