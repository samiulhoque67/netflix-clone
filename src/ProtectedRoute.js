import React from 'react';

import { useStateValue } from "./StateProvider";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
    const [{ basket,user }, dispatch] = useStateValue();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default ProtectedRoute