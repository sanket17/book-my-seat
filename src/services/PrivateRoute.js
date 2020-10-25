import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import store from 'store';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (Object.keys(store.get('loginUser')).length !== 0) {
            return <Component {...props} />;
          }
          return <Redirect to={{ pathname: '/' }} />;
        }}
      />
    </>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
