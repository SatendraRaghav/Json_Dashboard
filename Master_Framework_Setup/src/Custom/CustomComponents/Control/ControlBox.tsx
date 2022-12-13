import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomBox from '../Components/CustomBox';

const ControlBox = (props:any) => {
  
const data = props.uischema.value
  return(
  <CustomBox
     data={data}
  />
)};

export default withJsonFormsControlProps(ControlBox);