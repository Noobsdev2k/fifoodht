import React, { Suspense, useEffect } from "react";
import { Routes as Router, Route } from "react-router-dom";

import routesConfig from "../configs/routesConfig";

import styled from "styled-components";

const Loading = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 80px 30px 30px;
`;

function Routes() {
  return (
    <Suspense fallback={<Loading>Loading ... 🍔🍔🍔</Loading>}>
      <Router>
        {routesConfig.map(({ exact, path, element }, index) => (
          <Route
            key={`route-${index}`}
            path={path}
            element={element}
            exact={exact}
          />
        ))}
      </Router>
    </Suspense>
  );
}

export default Routes;
