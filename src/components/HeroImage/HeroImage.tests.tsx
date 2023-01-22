import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import HeroImage from "./HeroImage";

describe("Running Test for Web Component Library Hero Image", () => {
  test("Check if Hero Image is Visible", () => {
    render(<HeroImage />);
    expect(screen.getByRole("button", { name: "" })).toBeVisible();
  });

  test("Check if Hero Image is Disabled", () => {
    render(<HeroImage disabled />);
    expect(screen.getByRole("button", { name: "" })).toHaveStyleRule(
      "background-color: #888787"
    );
  });
});
