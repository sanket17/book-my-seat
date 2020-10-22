import React from 'react';
import FormField from './FormField';

export const getFields = (
  fields,
  data,
  error,
  handleOnChange,
  defaultOptions = {},
  typeAheadDatas = {},
  condition = {}
) => {
  return fields.map((field) => {
    return !Object.keys(condition).includes(field.key) ||
      condition[field.key] ? (
      <div key={field.key} className={field.class ? field.class : 'col-md-6'}>
        <FormField
          {...field}
          id={field.randomId ? field.id + '-' + Math.random() : field.id}
          inputClass={field.formClass}
          value={data[field.key] ? data[field.key] : field.defaultValue}
          onChange={handleOnChange}
          fieldKey={field.key}
          error={error && error[field.key]}
          typeAheadData={
            typeAheadDatas[field.key] ? typeAheadDatas[field.key] : () => {}
          }
          options={
            defaultOptions[field.key]
              ? defaultOptions[field.key]
              : field.options
          }
        />
      </div>
    ) : (
      ''
    );
  });
};
