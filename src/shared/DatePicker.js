import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import 'moment-timezone';
/* CSS Theme */
import styled from 'styled-components';
import { Theme } from '../theme/css/theme';
import { ErrorLabel, FormField } from '../theme/css/Global';

const moment = require('moment');

export default function DatePicker(props) {
  const { label, value, error, format, id, minDate, maxDate, readOnly } = props;
  return (
    <FormField className="form-group pt-2">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePickerSelector
          id={id}
          label={label}
          className="form-control"
          format={format}
          value={value ? value : moment().format('YYYY-MM-DD')}
          onChange={(event) =>
            props.onChange({
              key: props.fieldKey,
              value: moment(event).format('YYYY-MM-DD'),
            })
          }
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          minDate={minDate}
          maxDate={maxDate}
          readOnly={readOnly}
        />
      </MuiPickersUtilsProvider>
      <DatePickerErrorLabel>{error ? error : ''}</DatePickerErrorLabel>
    </FormField>
  );
}

const DatePickerErrorLabel = styled(ErrorLabel)`
  margin-top: 15px;
`;
const DatePickerSelector = styled(KeyboardDatePicker)`
  .MuiInputLabel-root {
    margin: 0 0 0 10px;
    font-size: 15px;
    background: ${Theme['$dark-green']};
    padding: 8px 10px;
    border-radius: 4px;
    width: 120px !important;
    text-align: center;
    color: ${Theme['$a-white']};
    font-family: ${Theme['$base-font-family']};
    position: relative;
    z-index: 99;
  }

  .MuiInput-root {
    padding: 13px 0px 0px 16px !important;
    font-size: ${Theme['$base-f-size']} !important;
    font-weight: 400;
    line-height: 1.5;
    color: ${Theme['$gray-90']};
    background-color: ${Theme['$a-white']} !important;
    background-clip: padding-box;
    border: 1px solid ${Theme['$gray-5']} !important;
    border-radius: 4px;
    font-family: ${Theme['$base-font-family']} !important;
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: -18px 0 0 0 !important;

    &:before {
      display: none;
    }

    &:after {
      display: none;
    }
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${Theme['$a-white']};
  }
  p {
    &.Mui-error {
      color: ${Theme['$a-red']}!important;
      font-size: ${Theme['$small-f-size']}!important;
      padding: 3px 0 0 0 !important;
      margin: 0 !important;
    }
  }

  .MuiInputAdornment-positionEnd {
    button {
      &.MuiIconButton-root {
        padding: 10px 10px 10px 10px;
        margin-top: -10px;
      }
    }
  }

  // label + .MuiInput-formControl {
  //   margin: 0px;
  // }
`;
