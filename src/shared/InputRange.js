import React from 'react';
import InputRange from 'react-input-range';
import { FormField } from './../theme/css/Global';
import 'react-input-range/lib/css/index.css';
import styled from 'styled-components';

const InputRangeField = (props) => {
  const {
    value,
    minValue,
    maxValue,
    label,
    onChange,
    fieldKey,
    formatLabel,
    step,
  } = props;

  const fieldChange = (value) => {
    onChange({
      key: fieldKey,
      value: value,
    });
  };
  return (
    <RangeFormField className="form-group">
      <label>{label}</label>
      <div className="row">
        <div className="col-9">
          <InputRange
            value={value}
            onChange={fieldChange}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
          />
        </div>
        <div className="col-2">
          <div className="average"> {formatLabel(value)}</div>
        </div>
      </div>
    </RangeFormField>
  );
};
const RangeFormField = styled(FormField)`
  label {
    bottom: 0px;
    top: -10px;
    margin: 0px;
    margin-bottom: 0.5rem;
  }
  .col-2 {
    padding-left: 0px;
  }
  .average {
    padding-left: 0px !important;
  }
`;

InputRangeField.prop = InputRangeField.defaultProps = {
  value: 0,
};

export default InputRangeField;
