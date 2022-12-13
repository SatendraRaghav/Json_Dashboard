import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomAppbar } from '../Components/CustomAppbar';

const ControlAppbar = (props:any) => {
  
const data = props.uischema.value
  return(
  <CustomAppbar
     Data={data}
  />
)};

export default withJsonFormsControlProps(ControlAppbar);