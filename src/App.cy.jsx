import React from "react";
import App from "./App";
import { mount } from "@cypress/react";
import * as router from "react-router-dom";

describe("<App />", () => {
  it("renders", () => {
    mount(
      <router.MemoryRouter router={router}>
        <router.Routes>
          <router.Route
            path={"/"}
            element={<App />}
          />
          <router.Route
            path={"/subpage"}
            element={<>Subpage</>}
          />
        </router.Routes>
      </router.MemoryRouter>
    );

    cy.get("button").click();

    cy.contains('Subpage');
  });
});
