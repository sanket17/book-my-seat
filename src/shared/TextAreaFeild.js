import React from 'react';
import PropTypes from 'prop-types';

import { ErrorLabel, FormField } from '../theme/css/Global';

const TextAreaField = (props) => {
  const fieldChange = (event) => {
    props.onChange({
      key: props.fieldKey,
      value: event.target.value,
    });
  };

  const {
    subType,
    name,
    label,
    value,
    error,
    readOnly,
    id,
    inputClass,
    rows,
    cols,
  } = props;
  return (
    <FormField className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        type={subType}
        name={name}
        onChange={(event) => fieldChange(event)}
        readOnly={readOnly}
        id={id}
        className={inputClass}
        rows={rows ? rows : 4}
        cols={cols ? cols : 50}
        style={{ width: '100%', padding: '10px' }}
        value={value}
      />
      <ErrorLabel>{error ? error : ''}</ErrorLabel>
    </FormField>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  subType: PropTypes.string,
  isReadOnly: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TextAreaField;
