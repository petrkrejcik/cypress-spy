import React from "react";
import App from "./App";
import * as router from "react-router-dom";

describe("<App />", () => {
  it("renders", () => {
    cy.spy(router, "useNavigate").as("navigate");
    cy.mount(
      <router.MemoryRouter>
        <App />
      </router.MemoryRouter>
    );

    cy.get("button").click();
    
    cy.get("@navigate").should("be.called");
  });
});
