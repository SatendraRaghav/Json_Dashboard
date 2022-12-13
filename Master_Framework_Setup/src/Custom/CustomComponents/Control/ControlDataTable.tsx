import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import DataTable from '../Components/DataTable';

const ControlDataTable = (props:any) => {
  const data:any = props.uischema.value;

  return(
  <DataTable
     data={data}
  />

)};

export default withJsonFormsControlProps(ControlDataTable);