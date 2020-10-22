import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import InputField from './InputField';
import ChoiceField from '../shared/ChoiceField';
import NumberField from './NumberField';
import DatePicker from './DatePicker';
import PhoneNumberField from './PhoneNumberField';
import TextAreaField from './TextAreaFeild';
import InputRangeField from './InputRange';

import LabelField from './LabelField';

const FormField = (props) => {
  const { type, editable, isLabel } = props;
  const [isEditing, setIsEditing] = useState(null);
  if ((editable && !isEditing) || (isLabel && !isEditing)) {
    return <LabelField setIsEditing={setIsEditing} {...props} />;
  } else {
    switch (type) {
      case 'input':
        return <InputField {...props} setIsEditing={setIsEditing} />;
      case 'choices':
        return <ChoiceField {...props} setIsEditing={setIsEditing} />;
      case 'number':
        return <NumberField {...props} setIsEditing={setIsEditing} />;
      case 'date':
        return <DatePicker {...props} setIsEditing={setIsEditing} />;
      case 'textarea':
        return <TextAreaField {...props} setIsEditing={setIsEditing} />;
      case 'input-range':
        return <InputRangeField {...props} setIsEditing={setIsEditing} />;
      case 'phone':
        return <PhoneNumberField {...props} setIsEditing={setIsEditing} />;
      default:
        return null;
    }
  }
};

FormField.propTypes = {
  type: PropTypes.string,
};

export default FormField;
