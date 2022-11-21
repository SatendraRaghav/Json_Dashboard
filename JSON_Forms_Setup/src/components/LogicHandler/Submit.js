import axios from "axios";
export const submitHandler = ({formData})=>{
    const config = {
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }
    console.log(JSON.stringify(formData));
    const Api = "https://hyperform.act21.io/hyperform_2/api/auth/login"
    const callApi = async()=>{
    await axios.post(Api,JSON.stringify(formData),config).then(
        (res)=> window.localStorage.setItem("token",`${res.data.accessToken}`)
    ).catch((err)=>console.log(`The error is ${err}`))
    }
    callApi();
    console.log(window.localStorage.getItem("token"))
}
