import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App  />
  // </React.StrictMode>
);











































//schema={schema} UiSchema={UiSchema}
//const buttonSecond = {
  //   content: "Second Button Click me",
  //   style: {
  //       padding: "5px 10px",
  //       width: "80%",
  //       borderRadius: "10px",
  //       backgroundColor: "tomato",
  //       color: "white",
  //       marginLeft: "auto",
  //       marginRight: "auto",
  //   }
  // }
  // const buttonFirst = {
  //   content: "First Button Click me",
  //   style: {
  //       padding: "5px 10px",
  //       width: "80%",
  //       borderRadius: "10px",
  //       backgroundColor: "tomato",
  //       color: "white",
  //       marginBottom:"50px",
  //       marginLeft: "auto",
  //       marginRight: "auto",
  //   }
  // }
  // const firstButtonJSON = JSON.stringify(buttonFirst);
  // const secondButtonJson = JSON.stringify(buttonSecond);
  // export const schema = {
  //   title: "Demo of new input folder.......!!!!",
  //   type: "object",
  //   properties: {
  //       button1: { type: "string" },
  //       button2: { type: "string" },
  //       textBox:{type:"string",title:"Enter something on me"}
  //   },
  // };
  
  // export const UiSchema = {
  //   "button1": {
  //       "ui:widget": "CustomButton",
  //       "ui:id":"labelChange",
  //       "ui:options": {
  //           value: firstButtonJSON,
  //           handler: {
  //               event: onclick,
  //               eventName: "labelChange1",
  //           }
  //       }
  //   },
  //   "button2": {
  //       "ui:widget": "CustomButton",
  //       "ui:options": {
  //           value: secondButtonJson,
  //           handler: {
  //               event: onclick,
  //               eventName: "labelChange2",
  //           }
  //       }
  //   },
  //   "textBox":{
  //     "ui:widget": "CustomText",
  //     "ui:options": {
  //       handler: {
  //           event: onclick,
  //           eventName: "textBox",
  //       }
  //   }
  //   }
  // };
