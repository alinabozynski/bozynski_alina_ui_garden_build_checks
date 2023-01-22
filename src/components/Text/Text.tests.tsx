import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Running Test for Web Component Library Text", () => {
  test("Check if Text Component is Visible", () => {
    render(<Text />);
    expect(screen.getByRole("textbox", { name: "" })).toBeVisible();
  });

  test("Check if Text Component is Disabled", () => {
    render(<Text disabled />);
    expect(screen.getByRole("textbox", { name: "" })).toHaveStyle(
      "background-color: #e4e3ea"
    );
  });
});
