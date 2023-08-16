import React from "react";
import App from "./App";
import { mount } from "@cypress/react";
import * as router from "react-router-dom";

describe("<App />", () => {
  it("renders", () => {
    const spyOnNavigate = () => {
      console.log("spyOnNavigate stub");
      // cy.spy(router, "useNavigate").as("navigate");

      cy.stub(router, 'useNavigate').returns(() => {});

      // TODO: almost there I think
    };

    mount(
      <router.MemoryRouter>
        {spyOnNavigate()}
        <App />
      </router.MemoryRouter>
    );

    cy.get("button").click();

    // cy.get("@navigate").should("be.called");
    cy.get('@useNavigate').should('have.been.calledOnce');
  });
});
