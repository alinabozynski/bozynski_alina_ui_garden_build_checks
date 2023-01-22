import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Table from "./Table";

describe("Running Test for Web Component Library Text", () => {
  test("Check if Text Component is Visible", () => {
    render(<Table />);
    expect(screen.getByRole("table", { name: "" })).toBeVisible();
  });

  test("Check if Text Component is Disabled", () => {
    render(<Table disabled />);
    expect(screen.getByRole("table", { name: "" })).toHaveStyle(
      "color: #515050"
    );
  });
});
