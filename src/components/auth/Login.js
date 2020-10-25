import React, { useState, useEffect } from 'react';
import store from 'store';
import { ToastsStore } from 'react-toasts';
import { CardBox, PageTitle, Button, ErrorLabel } from '../../theme/css/Global';

import { getFields } from '../../shared/FieldRenderer';
import { LoginFormConstant } from '../../constants/LoginFormConstant';

function Login({ history }) {
  const [loginFormData, setLoginFormData] = useState({});
  const [error, setError] = useState({});
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (users === null) {
      setUsers(store.get('users'));
      console.log(Object.keys(store.get('loginUser')).length);
    }
  }, [users]);

  const handleFieldChange = ({ key, value }) => {
    if (error[key]) {
      delete error[key];
      setError(error);
    }

    setLoginFormData({
      ...loginFormData,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(true);
    const loginUser = users.filter(
      (user) =>
        user.email === loginFormData.email &&
        user.password === loginFormData.password
    );
    if (loginUser.length !== 0) {
      store.set('loginUser', loginUser[0]);
      history.push({
        pathname: '/show',
      });
    } else {
      ToastsStore.error('Invalid credentials.');
    }
  };

  return (
    <React.Fragment>
      <PageTitle className="pt-5 pb-4 text-center">Login</PageTitle>
      <div className="row justify-content-md-center mr-0 ml-0">
        <div className="col-md-6">
          <CardBox>
            <div className="member-login mt-5 mb-5">
              <div className="user-login text-center mb-4">
                {/* <img src={logo} alt="" /> */}
              </div>
              <form onSubmit={handleSubmit}>
                {getFields(
                  LoginFormConstant,
                  loginFormData,
                  error,
                  handleFieldChange
                )}
                <ErrorLabel className="text-center">
                  {error.non_field_errors ? error.non_field_errors : ''}
                </ErrorLabel>
                <Button className="btn btn-primary w-100 mt-4">LOGIN</Button>
              </form>
              <div
                // onClick={redirectToForgetPassword}
                className="forgot-link text-center mt-4"
              >
                Forgot your password?
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
