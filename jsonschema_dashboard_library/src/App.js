import React, { useState } from 'react'
import "./App.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import { Graph } from '@act21_products/grapho';
import { ui } from './Ui';
import { schema } from './Ui';

const MyCustomWidget = (props) => {
  const { options } = props;
  const { value } = options;
  return (
    <>
      <Graph value={value} />
    </>
  );
};
const MyCustomWidgetImg = (props)=>{
  const [name,setName] = useState("Dashboard");
  const {options} = props;
  const {value} = options;
  const data = JSON.parse(value)
  return(
    <>
    
    <img src={data.src} alt={data.alt}  style={data.style}/><br/><br/>
    <h1>This is Act21  {name}</h1>
    <button onClick={()=>setName("Satendra Raghav ")}>Explore employe name</button>
    </>
  )
}

const widgets = {
  myCustomWidgetGraph: MyCustomWidget,
  myCustomWidgetImg:MyCustomWidgetImg
};


const App = () => {
  return (
    <div className='App'>
      <Form schema={schema}
        uiSchema={ui}
        validator={validator}
        widgets={widgets}
        onChange={() => console.log("changed")}
        onSubmit={() => console.log("submitted")}
        onError={() => console.log("errors")} >
      </Form>
    </div>
  )
}
export default App;