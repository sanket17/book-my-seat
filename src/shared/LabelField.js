import React from 'react';
import { FormField } from './../theme/css/Global';
import styled from 'styled-components';
import moment from 'moment';
const numeral = require('numeral');
export default function LabelField(props) {
  const {
    label,
    value,
    editable,
    format,
    layout,
    setIsEditing,
    type,
    subType,
    prefix,
    suffix,
    keyLabel,
    logo,
    labelClass,
    multiple,
  } = props;
  const getValue = () => {
    if (value) {
      switch (type) {
        case 'number':
          switch (subType) {
            case 'text':
              if (format) {
                let j = 0;
                let formattedValue = prefix ? prefix : '';
                for (let i = 0; i < format.length; i++) {
                  if (format[i] === '#') {
                    formattedValue = formattedValue + value[j];
                    j = j + 1;
                  } else {
                    formattedValue = formattedValue + format[i];
                  }
                }
                formattedValue = formattedValue + (suffix ? suffix : '');
                return formattedValue;
              }

              return (
                (prefix ? prefix : '') +
                ' ' +
                numeral(value).format('0,0.00') +
                ' ' +
                (suffix ? suffix : '')
              );
            case 'currency':
              return '$ ' + numeral(value).format('0,0.00');
            default:
              return value;
          }
        case 'text':
          return value;
        case 'typeahead':
          switch (subType) {
            case 'multiChoice':
              if (typeof value[0] !== 'string') {
                let values = value.map(
                  (item) => item[keyLabel ? keyLabel : 'label']
                );
                return values.join(', ');
              }
              return value.join(', ');
            default:
              return value;
          }
        case 'date':
          if (multiple) {
            let values = value.map((item) => moment(item).format('MM/DD/YYYY'));
            return values.join(', ');
          }
          return moment(value).format('MM/DD/YYYY');
        default:
          return value;
      }
    }
    return 'N/A';
  };
  const onClick = () => {
    if (editable) {
      setIsEditing(true);
    }
  };
  return (
    <Field className="form-group" editable={editable} onClick={onClick}>
      {layout === 'inline' ? (
        <div className="label">
          {label} : <span>{getValue()}</span>
          {editable ? (
            <i
              onClick={() => setIsEditing(true)}
              className="fa fa-pencil fa-1x pull-right"
              aria-hidden="true"
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        <Field.VerticalBox
          className={
            labelClass ? labelClass + ' vertical-align' : 'vertical-align'
          }
        >
          {logo ? (
            <Field.LogoBox>
              <Logo src={logo} />
            </Field.LogoBox>
          ) : (
            ''
          )}

          <Field.VerticalBox.Label className="label">
            <div>{label} :</div>
            <span>
              {getValue()}
              {editable ? (
                <i
                  className="fa fa-pencil fa-1x pull-right"
                  aria-hidden="true"
                />
              ) : (
                ''
              )}
            </span>
          </Field.VerticalBox.Label>
        </Field.VerticalBox>
      )}
    </Field>
  );
}

const Field = styled(FormField)`
  i {
    display: none;
  }
  &:hover {
    cursor: ${(props) => (props.editable ? 'pointer' : 'auto')};
    i {
      display: block;
    }
  }
  .label {
    margin-bottom: 5px !important;
  }
`;
Field.VerticalBox = styled.div`
  &.box-layout {
    text-align: center;
    margin: 0 auto;
    border: 1px solid #e2e5ec;
    border-radius: 12px;
    min-width: 200px;
    max-width: 350px;
    padding: 10px;
  }
`;
Field.LogoBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  padding-bottom: 5px;
`;
Field.VerticalBox.Label = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const Logo = styled.img`
  min-width: 30px;
  max-width: 45px;
  width: 100%;
  border-radius: 50%;
`;
