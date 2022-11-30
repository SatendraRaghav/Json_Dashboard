import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInput from '../Components/CustomInput';

const ControlInput = (props:any) => {
  const data:any = props.uischema.option.value;
  return(
  <CustomInput
     data={data}
     value={props.data}
     updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
  />
)};

export default withJsonFormsControlProps(ControlInput);