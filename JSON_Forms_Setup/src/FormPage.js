import React, { useEffect, useState } from 'react';
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { widgets } from './components/CustomWidgets/CustomWidjets';
import axios from 'axios';
import { changeHandler } from './components/LogicHandler/Logic';
import { submitHandler } from './components/LogicHandler/Submit';

const FormPage = () => {
    const [formData, setFormData] = useState({email:"",password:""})
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
        changeHandler(tempName,props.formContext.formData,props);
        setFormData(props.formContext.formData);
    } 
    const tempChangeHandler = ({formData})=>{
        setFormData(formData)
    } 
    return (
        <div>
            <Form
                validator={validator}
                schema={schema}
                formData={formData}
                widgets={widgets}
                uiSchema={UiSchema}
                onChange={(e)=>tempChangeHandler(e)}
                formContext={{ handler: func,formData:formData,tempChange:tempChangeHandler,homeRender:false }}
                onSubmit={(e)=>submitHandler(e)}
            />
        </div>
    )
};
export default FormPage;