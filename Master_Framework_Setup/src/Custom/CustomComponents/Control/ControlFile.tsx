import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomFile from '../Components/CustomFile';

const ControlFile = (props:any) => {
  const data:any = props.uischema.option.value;
  return(
  <CustomFile
     data={data}
     value={props.data}
     updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
  />
)};

export default withJsonFormsControlProps(ControlFile);