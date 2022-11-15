import React, { useState } from 'react'
import "./App.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import { Graph } from '@act21_products/grapho';
import { ui } from './Components/UiSchema';
import { schema } from './Components/UiSchema';

const func = (property, value, id, targetId = "") => {
  const elem = document.getElementById(id);
  const targetElem = document.getElementById(targetId);
  if (property === "backgroundColor") {
    elem.style.backgroundColor = value;
  }
  else if (property === "color") {
    elem.style.color = value;
  }
  else if (property === "display") {
    elem.style.display = value;
  }
  else if (property === "border") {
    elem.style.border = value;
  }
  else if (property === "createElement") {
    const temp = document.createElement('p')
    temp.textContent = value;
    elem.appendChild(temp)
  }
  else if (property === "createTextNode") {
    const text = document.createTextNode(value)
    elem.appendChild(text)
  }
  else if (property === "removeChild") {

    elem.removeChild(targetElem)
  }
  else if (property === "remove") {
    targetElem.remove()
  }
  else if (property === "window") {
    window.alert(value)
  }

}

const CustomButton = (props) => {
  const { options } = props;
  const { value } = options;
  const data = JSON.parse(value);
  const { eventHandler, handlerWork, handlerValue,content,style,id } = data;
  const [tempValue, setValue] = useState(data.style[handlerWork]);
  const [click, setClick] = useState(1)
  const handler = () => {
    setClick((pre) => pre + 1);
    click % 2 === 0 ? setValue(style[handlerWork]) :
      setValue(handlerValue);
  }
     switch(eventHandler){
   case "click":
    return <button id={id}
    onClick={() => handler()}
    style={{ ...style, [handlerWork]: tempValue }} >{content}</button>
    case "mouseOver":
      return <button id={id}
      onMouseOver={() => handler()}
      style={{ ...style, [handlerWork]: tempValue }} >{content}</button>
  }}
const MyCustomWidget = (props) => {
  const { options } = props;
  const { value } = options;
  return (
    <>
      <Graph value={value} />
    </>
  );
};
const MyCustomWidgetImg = (props) => {
  const { options } = props;
  const { value } = options;
  const data = JSON.parse(value);

  return (
    <>
      <img src={data.src} alt={data.alt} style={data.style} /><br /><br />
      <button onClick={(e) => props.onChange(e)}>Explore employe name</button>
      <h1>This is {data.button.content}</h1>
    </>
  )
}
const App = () => {


  const widgets = {
    myCustomWidgetGraph: MyCustomWidget,
    myCustomWidgetImg: MyCustomWidgetImg,
    customButton: CustomButton,
  };
  const ChangeHandler =({ formData })=>{
    console.log(formData)
    formData.fName= "Raghav"
    // const [form,setForm] = useState(formData)
    // console.log(e)
    // console.log(e.formData)
    // const newFormData = _.cloneDeep(formData);     
    // form.fName = "Raghav"
    // setForm(formData)
    //  newFormData.languages[0].code = 'chn';  
    // this.setState({ formData: form });
  }
  const submitHandler=(e)=>{
    console.log(JSON.stringify(e.formData))
  }
  return (
    <div className='App'>
      <Form schema={schema}
        uiSchema={ui}
        validator={validator}
        widgets={widgets}
      // onChange={() => console.log("changed")}
      // onClick={() => console.log("clicked")}
      onChange={ChangeHandler}
      // onSubmit={(e)=>submitHandler(e)}
      >
      </Form>

    </div>
  )
}
export default App;





  //  const click = JSON.parse(func,function(key,value){
  //   if(value && (typeof value === 'string') && value.indexOf("function")===0){
  //     var jsFunc = new Function('return '+ value)();
  //     return jsFunc;
  //   }
  //   return value;
  //  })
//   const func2 = JSON.parse(func)
//  console.log(func2)

// const handlerFunc = (handler,property,value,id,targetId="")=>{
//   const elem =  document.getElementById(id);
//      elem.addEventListener(handler,func(property,value,id,targetId))
// }