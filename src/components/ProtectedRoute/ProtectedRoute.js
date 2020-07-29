import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  const isLogged = sessionStorage.getItem('login');
  if (isLogged) {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout {...matchProps}>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    );
  } else {
    return <Redirect to="/sign-in" />;
  }
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default ProtectedRoute;
