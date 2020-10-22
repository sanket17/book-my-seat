import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ErrorLabel, Input, FormField } from './../theme/css/Global';

const InputField = (props) => {
  const [formValue, setFormValue] = useState('');
  const {
    subType,
    name,
    label,
    value,
    error,
    readOnly,
    id,
    inputClass,
    minValue,
    editable,
    setIsEditing,
    fieldKey,
    onChange,
    question,
  } = props;

  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = (event) => {
    if (editable) {
      setFormValue(event.target.value);
    } else {
      onChange({
        key: fieldKey,
        value: event.target.value,
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
    <FormField editable={editable} className="form-group">
      {question ? (
        <div className="label"> {label}</div>
      ) : (
        <label htmlFor={id}>{label}</label>
      )}
      <Input
        type={subType}
        name={name}
        value={editable ? formValue : value}
        onChange={(event) => fieldChange(event)}
        readOnly={readOnly}
        id={id}
        className={inputClass}
        min={minValue ? minValue : 0}
        editable={editable}
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
    </FormField>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subType: PropTypes.string,
  isReadOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default InputField;
