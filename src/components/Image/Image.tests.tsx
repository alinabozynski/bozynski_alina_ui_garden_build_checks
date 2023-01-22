import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Image from "./Image";

describe("Running Test for Web Component Library Image", () => {
  test("Check if Image is Visible", () => {
    render(<Image />);
    expect(screen.getByRole("img", { name: "test" })).toBeVisible();
  });

  test("Check if Image is Disabled", () => {
    render(<Image disabled />);
    expect(screen.getByRole("img", { name: "" })).toHaveStyle(
      "filter: grayscale(95%)"
    );
  });
});
