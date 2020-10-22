import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

/* CSS Theme */
import styled from 'styled-components';
import { ErrorLabel, FormField } from '../theme/css/Global';

const NumberField = (props) => {
  const [formValue, setFormValue] = useState('');
  const {
    label,
    name,
    value,
    error,
    subType,
    id,
    format,
    prefix,
    inputClass,
    thousandSeparator,
    minValue,
    decimalSeparator,
    onChange,
    fieldKey,
    editable,
    setIsEditing,
    decimalScale,
    readOnly,
  } = props;
  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = (event) => {
    if (editable) {
      setFormValue(event.target.value.replace(/[^0-9.]/g, ''));
    } else {
      onChange({
        key: fieldKey,
        value: event.target.value.replace(/[^0-9.]/g, ''),
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
    <React.Fragment>
      <FormField className="form-group">
        <NumFieldBox>
          <label htmlFor={id}>{label}</label>
          <NumberFormat
            className={'form-control ' + inputClass}
            type={subType === 'currency' ? 'text' : subType}
            format={format}
            name={name}
            prefix={prefix}
            allowNegative={false}
            autoComplete="off"
            value={editable ? formValue : value}
            decimalSeparator={decimalSeparator}
            thousandSeparator={
              subType === 'currency' ? true : thousandSeparator
            }
            min={minValue ? minValue : 0}
            onChange={(event) => fieldChange(event)}
            decimalScale={decimalScale ? decimalScale : null}
            readOnly={readOnly}
          />
          {editable ? (
            <div
              style={{ position: 'absolute', top: '35px', right: '20px' }}
              className="pull-right"
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
          <ErrorLabel>{error ? error : ''}</ErrorLabel>
        </NumFieldBox>
      </FormField>
    </React.Fragment>
  );
};

NumberField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  error: PropTypes.array,
};

export const NumFieldBox = styled.div`
  input {
    padding: 1.2rem 1rem 0.65rem 1rem;
  }
`;

export default NumberField;
