import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RadioButton from "./RadioButton";

describe("Running Test for Web Component Library Radio Button", () => {
  test("Check if Radio Button Exists", () => {
    render(<RadioButton radioButtonLabel="Visible" />);
    expect(screen.getByRole("radio", { name: "" })).toBeTruthy();
  });

  test("Check if Radio Button Cursor Changes when Disabled", () => {
    render(<RadioButton radioButtonLabel="Disabled" disabled />);
    expect(screen.getByRole("radio", { name: "" })).toHaveStyle(
      "cursor: not-allowed"
    );
  });
});
