import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInput from '../Components/CustomInput';

const ControlInput = (props:any) => {
  const data:any = props.uischema.value;
  // const [data,setData] = useState<null|{}>(null)
  // if(typeof props.uischema.option ==='object'){
  // const demoData:any = props.uischema.option.value;
  //    setData(demoData)
  // }else{
  //    setData({})
  // }

  return(
    <CustomInput
      data={data}
      value={props.data}
      updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
   />)
  }

export default withJsonFormsControlProps(ControlInput);