import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';

const InputField = ({ meta: { touched, error }, ...restProps }) => (
  <div>
    <Input {...restProps} />
    {touched &&
      error && (
        <div>
          <Icon color="red" name="warning circle" />
          <span style={{ color: 'red' }}>{error}</span>
        </div>
      )}
  </div>
);

InputField.defaultProps = {
  placeholder: '',
  type: 'text'
};

InputField.propTypes = {
  input: PropTypes.any.isRequired,
  meta: PropTypes.object.isRequired
};

export default InputField;
