import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
} from '@jsonforms/material-renderers';
import { renders } from './renders';
import { JsonSchema } from '@jsonforms/core';
import { UISchemaElement } from '@jsonforms/core';
import "./App.css"
import { createAjv } from "@jsonforms/core";

type formDataType = {
  data:{}
}

const App = () => {
  const [data, setData] = useState({} as formDataType);
  const [schema, setSchema] = useState<JsonSchema | undefined>(undefined)
  const [UiSchema, setUiSchema] = useState<UISchemaElement| undefined>(undefined)
  useEffect(() => {
    window.sessionStorage.clear();
    const server = document.URL;
    console.log(server)
      const apiCall = async () => {
          await axios.get(`${server}/Schema.json`).then(
              (res) => setSchema(res.data)
          )
          await axios.get(`${server}/UiSchema.json`).then(
              (res) => setUiSchema(res.data)
          )
      }
      apiCall()
  }, [])

  const changeHandler = (data:any,errors:any)=>{
    console.log(JSON.stringify(data))
    window.sessionStorage.setItem("formData",JSON.stringify(data));
    setData(data)
  }
  // const Ajv = new ajv()
  // ajv.addFormat('media-capture', {
  //   type: 'string'
  // })
 const myAjv = createAjv(); // import { createAjv } from @jsonforms/core
myAjv.addFormat('inputFile', {
  type: 'string',
  
});
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        uischema={UiSchema}
        data={data}
        renderers={renders}
        cells={materialCells}
        ajv={myAjv}
        onChange = {({ data, errors} ) => changeHandler(data,errors)}
      />
    </div>
  )
}

export default App