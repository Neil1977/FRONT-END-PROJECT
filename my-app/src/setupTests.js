/*MAY NOT BE NEEDED IGNORE
/*import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

/**
 * Verify something should render
 */
/*test("App should render", () => {
  render(<App />);

  expect(screen.getByText("Welcome, party people!")).toBeInTheDocument();
});

test("Button should render", () => {
  // TODO: change the expect to actually test something 😉
  expect("no test written").toBe("tested");
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
/*test("theme button should update button text", () => {
  // TODO: change the expect to actually test something 😉
  expect("no test written").toBe("tested");
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test("theme button should toggle styles", () => {
  // TODO: change the expect to actually test something 😉
  expect("no test written").toBe("tested");
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
/*test("hidden button should toggle hidden content", () => {
  // TODO: change the expect to actually test something 😉
  expect("no test written").toBe("tested");
});*/
