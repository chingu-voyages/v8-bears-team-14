import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Input, InputLabel } from '@material-ui/core';

import StripeInput from './StripeInput';
import Error from '../../components/Error/Error';

const StripeElementWrapper = ({ component, onChange, label, name, error }) => (
  <div>
    <FormControl fullWidth margin="dense" error={!!error}>
      <InputLabel shrink error={!!error}>
        {label}
      </InputLabel>
      <Input
        fullWidth
        inputComponent={StripeInput}
        onChange={onChange}
        inputProps={{ component }}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </FormControl>
  </div>
);

StripeElementWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default StripeElementWrapper;
