import React, { useEffect, useState } from 'react';
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { widgets } from './components/CustomWidgets/CustomWidjets';
import axios from 'axios';
import { changeHandler } from './components/LogicHandler/Logic';

const FormPage = () => {
    const [formData, setFormData] = useState("")
    const [schema, setSchema] = useState({})
    const [UiSchema, setUiSchema] = useState({})
    useEffect(() => {
        const apiCall = async () => {
            await axios.get('Schema.json').then(
                (res) => setSchema(res.data)
            ).catch((err) => {
                console.log("the error is " + err)
            })
            await axios.get('UiSchema.json').then(
                (res) => setUiSchema(res.data)
            ).catch((err) => {
                console.log("the error is " + err)
            })

        }
        apiCall()
    },[])
    const func = (tempName,props) => {
        console.log(`${tempName}  newfunc`)
        changeHandler(tempName,props.formContext.formData,props);
        setFormData(props.formContext.formData);
        console.log(props.formContext.data)
    }  
const newHandler = ({formData})=>{
    setFormData(formData)
}

    return (
        <div>
            <Form
                validator={validator}
                schema={schema}
                formData={formData}
                onChange={(e)=>newHandler(e)}
                widgets={widgets}
                uiSchema={UiSchema}
                formContext={{ handler: func,formData:formData }}
            />
        </div>
    )
};
export default FormPage;