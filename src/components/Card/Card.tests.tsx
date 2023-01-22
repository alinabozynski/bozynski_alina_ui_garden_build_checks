import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Card from "./Card";

describe("Running Test for Web Component Library Card", () => {
  test("Check if Card is Visible", () => {
    render(<Card />);
    expect(screen.getByRole("banner", { name: "" })).toBeVisible();
  });

  test("Check if Card is Disabled", () => {
    render(<Card disabled />);
    expect(screen.getByRole("banner", { name: "" })).toHaveStyleRule(
      "background-color: #888787"
    );
  });
});
