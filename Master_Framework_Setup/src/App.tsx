import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
} from '@jsonforms/material-renderers';
import { renders } from './renders';
import { JsonSchema } from '@jsonforms/core';
import { UISchemaElement } from '@jsonforms/core';
import "./App.css"
import { Button } from '@mui/material';
import { DataContext } from './Context';


type formDataType = {
  data:{}
}
const App = () => {
  const {state} = useContext(DataContext);
  const [data, setData] = useState({} as formDataType);
  const [schema, setSchema] = useState<JsonSchema | undefined>(undefined)
  const [UiSchema, setUiSchema] = useState<UISchemaElement| undefined>(undefined)
  useEffect(() => {
    // window.sessionStorage.clear();
    const server = location.href ;
    console.log(server)
      const apiCall = async () => {
          await axios.get(`${server}/Schema.json`).then(
              (res) =>{ setSchema(res.data)})
          await axios.get(`${server}/UiSchema.json`).then(
              (res) =>{setUiSchema(res.data)})
         setData(state.formData)
         console.log(data)
      }
      apiCall()
  },[state.url])
  const changeHandler = (data:any,errors:any)=>{
    setData(data)
    console.log(data)
  }

  return (
  
    <div className='App'>
      <JsonForms
        data={data}
        schema={schema}
        uischema={UiSchema}
        renderers={renders}
        cells={materialCells}
        onChange = {({ data, errors} ) => changeHandler(data,errors)}
      />
    </div>
   
  )
}

export default App