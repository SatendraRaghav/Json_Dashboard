import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomButton } from '../Components/CustomButton';


const ControlButton = (props:any) => {
  const data:any = props.uischema.value;

  return(
  <CustomButton
     data={data}
  />

)};

export default withJsonFormsControlProps(ControlButton);