import { Product1 } from './DemoData';
import { Product2 } from './DemoData';
import { Product3 } from './DemoData';
import { value } from './DemoData';
import { imgValueObj } from './DemoData';
import { buttonData } from './DemoData';

const buttonDataJSON = JSON.stringify(buttonData)
const value2 = JSON.stringify(value);
const imgValue = JSON.stringify(imgValueObj);

export const schema = {
    title: "Demo of new input folder.......!!!!",
    type: "object",
    required: ["title"],
    properties: {
      btn:{type:"string"},
      myCustomWidget: { type: "string" },
      img:{type:"string"},
      fName: { type: "string", title: "Your First Name", default: "Satendra" },
      lName: { type: "string", title: "Your Last Name", default: "Raghav" },
  
      password: { type: "string", title: "Fill Your Password", minLength: 3 }, 
      department: { type: "string", title: "Department-Telephone Number" },
      showWoek: { type: "string", format: "data-url", title: "Upload your work" },
      date: { type: "string", title: "Your Task Date" },
      // title1: { type: "string", enum: ["kotak", "hjyperform", "Mama"], title: "Add Your Task", default: "A new task" },
      done: {
        type: "boolean",
        title: "Please recheck your details it will be not change once it submitted, Are you check it ?",
        default: false
      },
      myCustomWidget2: { type: "string" },
    },
    required: ["fName"],
  
  };
export const ui = {
  "btn":{
    "ui:widget": "customButton",
    "ui:options": {
      value: buttonDataJSON,
      }
    },
    "myCustomWidget": {
      "ui:widget": "myCustomWidgetGraph",
      "ui:options": {
        value: value2
      }
    }, 
    "img":{
        "ui:widget": "myCustomWidgetImg",
        "ui:options": {
          value: imgValue
        } 
    },
   
    // "title1": {
    //   "ui:classNames": "round_field"
    // },
    "done": {
      "ui:widget": "checkbox",
      "ui:classNames": "round_field"
    },
    "fName": {
      "ui:autofocus": true,
      "ui:autocomplete": "on",
      "ui:classNames": "round_field"
    },
    "lName": {
      "ui:classNames": "round_field",
      // "ui:widget": "hidden"
    },
    "showWork": {
      "ui:options": { accept: ".pdf" }
    },
    "password": {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
      'ui:classNames': "custom-class-password",
      "ui:autofoced": true,
      "ui:classNames": "password",
      "ui:classNames": "round_field"
    },
    "date": {
      "ui:widget": "date",
      "ui:options": {
        "yearsRange": [
          1980,
          2030
        ]
      },

      "ui:classNames": "round_field"
    },
    "department": {
      "ui:options": {
        "inputType": 'tel'
      },
      "ui:classNames": "round_field"
    },
    "ui:submitButtonOptions": {
      "props": {
        "disabled": false,
        "className": "submit",
      },
      "norender": false,
      "submitText": "Submit Data"
    },
    "myCustomWidget2": {
        "ui:widget": "myCustomWidgetGraph",
        "ui:options": {
          value: value2
        }
  }
}
 