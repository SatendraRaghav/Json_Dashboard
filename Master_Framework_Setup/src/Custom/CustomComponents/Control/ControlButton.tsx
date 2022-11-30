import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomButton } from '../Components/CustomButton';


const ControlButton = (props:any) => {
  const data:any = props.uischema.option.value;

  return(
  <CustomButton
     data={data}
  />

)};

export default withJsonFormsControlProps(ControlButton);