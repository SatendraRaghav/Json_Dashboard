import axios from "axios";

export const logicHolder = (eventName:string| null) => {
    console.log( window.sessionStorage.getItem("formData"))
    if(eventName==="submitForm"){
     const data =  window.sessionStorage.getItem("formData");
     const config = {
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }
    const Api = "https://hyperform.act21.io/hyperform_2/api/auth/login"
    const callApi = async ()=>{
    await axios.post(Api,data,config).then(
        (res)=>{ window.sessionStorage.setItem("token",`${res.data.accessToken}`)
                   console.log(window.sessionStorage.getItem("token"))}
    ).catch((err)=>console.log(`The error is ${err}`))
    }
    callApi();
    }
    return;
}