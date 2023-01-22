import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Button from "./Button";

describe("Running Test for Web Component Library Button", () => {
  test("Check if Button is Visible", () => {
    render(<Button />);
    expect(screen.getByRole("button", { name: "" })).toBeVisible();
  });

  test("Check if Button is Disabled", () => {
    render(<Button disabled />);
    expect(screen.getByRole("button", { name: "" })).toHaveStyleRule(
      "background-color: #B5B5B5"
    );
  });
});
