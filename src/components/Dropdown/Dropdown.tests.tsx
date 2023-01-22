import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Dropdown from "./Dropdown";

describe("Running Test for Web Component Library Dropdown", () => {
  test("Check if Dropdown Exists", () => {
    render(<Dropdown />);
    expect(screen.getByRole("button", { name: "" })).toBeVisible();
  });

  test("Check if Dropdown Cursor Changes when Disabled", () => {
    render(<Dropdown disabled />);
    expect(screen.getByRole("button", { name: "" })).toHaveStyleRule(
      "background-color: #9b9b9b"
    );
  });
});
