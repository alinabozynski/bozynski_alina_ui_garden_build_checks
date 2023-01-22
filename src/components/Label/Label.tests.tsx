import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Label from "./Label";

describe("Running Test for Web Component Library Label", () => {
  test("Check if Label is Visible", () => {
    render(<Label label="Default" />);
    expect(screen.getByText("Default")).toBeVisible();
  });

  test("Check if Label is Disabled", () => {
    render(<Label label="Disabled" disabled />);
    expect(screen.getByText("Disabled")).toHaveStyleRule("color: #000");
  });
});
