import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import store from 'store';
import { CardBox, PageTitle, Button, ErrorLabel } from '../../theme/css/Global';
import { getFields } from '../../shared/FieldRenderer';
import { SigninFormConstant } from '../../constants/LoginFormConstant';

const commonPassworList = require('fxa-common-password-list');

export default function SigninComponent({ history }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  const handleFieldChange = ({ key, value }) => {
    if (error[key]) delete error[key];
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const isValidForm = () => {
    const formError = {};
    SigninFormConstant.forEach(async ({ key, required }) => {
      if (required && !formData[key]) {
        formError[key] = ['This field may not blank.'];
      } else if (key === 'email') {
        const mailformat = /^\w+([.-]?\w+)*[+0-9]*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!formData[key].match(mailformat)) {
          formError[key] = ['Invalid email address.'];
        }
      } else if (key === 'password') {
        formError[key] = [];
        if (formData.password.length < 8) {
          formError[key].push(
            'This password is too short. It must contain at least 8 characters.'
          );
        }
        if (formData.password.match(/^[0-9]+$/)) {
          formError[key].push('This password is entirely numeric.');
        }
        if (commonPassworList.test(formData[key])) {
          formError[key].push('This password is too common');
        }
        if (formError[key].length === 0) {
          delete formError[key];
        }
      } else if (key === 'phone' && formData[key].length < 10) {
        formError[key] = ['Phone Number should have 10 digits.'];
      }
    });
    if (
      formData.password &&
      formData.confirm_password &&
      formData.password !== formData.confirm_password
    ) {
      formError.confirm_password = ['both password should match.'];
    }
    setError(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault(true);
    if (isValidForm()) {
      let users = store.get('users');
      users = [...users, formData];
      store.set('users', users);
      history.push({
        pathname: '/',
      });
    }
  };
  return (
    <>
      <PageTitle className="pt-5 pb-4 text-center">New Registration</PageTitle>
      <div className="row justify-content-md-center mr-0 ml-0">
        <div className="col-md-6">
          <CardBox>
            <div className="member-login mt-5 mb-5">
              <div className="user-login text-center mb-4">
                {/* <img src={logo} alt="" /> */}
              </div>
              {getFields(
                SigninFormConstant,
                formData,
                error,
                handleFieldChange
              )}
              <ErrorLabel className="text-center">
                {error.non_field_errors ? error.non_field_errors : ''}
              </ErrorLabel>
              <Button
                className="btn btn-primary w-100 mt-4"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
              <div
                onClick={() => history.push({ pathname: '/' })}
                className="forgot-link text-center mt-4"
              >
                Go Back to Login
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
}

SigninComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
