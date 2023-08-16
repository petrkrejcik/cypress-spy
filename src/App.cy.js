import React from "react";
import App from "./App";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/subpage"} element={<>Subpage</>} />
        </Routes>
      </MemoryRouter>
    );

    cy.get("button").click();

    cy.contains("Subpage");
  });
});
