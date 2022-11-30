import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomAppbar } from '../Components/CustomAppbar';

const ControlAppbar = (props:any) => {
  const data:any = props.uischema.option.value;
  return(
  <CustomAppbar
     Data={data}
  />
)};

export default withJsonFormsControlProps(ControlAppbar);