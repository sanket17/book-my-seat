import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

/* CSS Theme */
import { ErrorLabel, FormField } from '../theme/css/Global';
import { Theme } from '../theme/css/theme';

const PhoneNumberField = (props) => {
  const [formValue, setFormValue] = useState('');
  const {
    label,
    name,
    value,
    error,
    id,
    inputClass,
    onChange,
    fieldKey,
    editable,
    setIsEditing,
    readOnly,
    question,
  } = props;

  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = (event) => {
    if (editable) {
      setFormValue(event);
    } else {
      onChange({
        key: fieldKey,
        value: event,
      });
    }
  };

  const setEditingValue = () => {
    setIsEditing(false);
    onChange({
      key: fieldKey,
      value: formValue,
    });
  };

  return (
    <>
      <FormField className="form-group">
        <PhoneFieldBox>
          {question ? (
            <div className="label"> {label}</div>
          ) : (
            <label htmlFor={id}>{label}</label>
          )}

          <PhoneInput
            className={inputClass}
            defaultCountry="IN"
            name={name}
            value={editable ? formValue : value}
            onChange={(event) => fieldChange(event)}
            disabled={readOnly}
            limitMaxLength
          />

          {editable ? (
            <div
              style={{ position: 'absolute', top: '35px', right: '20px' }}
              className="editable-part  pull-right"
            >
              <i
                onClick={setEditingValue}
                className="fa fa-check-circle fa-2x mr-2"
                aria-hidden="true"
              />
              <i
                onClick={() => setIsEditing(false)}
                className="fa fa-times-circle fa-2x"
                aria-hidden="true"
              />
            </div>
          ) : (
            ''
          )}
          <ErrorLabel>{error || ''}</ErrorLabel>
        </PhoneFieldBox>
      </FormField>
    </>
  );
};

PhoneNumberField.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  editable: PropTypes.bool,
  setIsEditing: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  question: PropTypes.bool,
};
PhoneNumberField.defaultProps = {
  readOnly: false,
  editable: false,
  error: '',
  value: '',
  name: '',
  inputClass: '',
  question: false,
};
export const PhoneFieldBox = styled.div`
  input {
    padding: 1.2rem 1rem 0.65rem 1rem;
  }

  .PhoneInputInput {
    border: 1px solid ${Theme['$gray-9']};
  }
`;

export default PhoneNumberField;
