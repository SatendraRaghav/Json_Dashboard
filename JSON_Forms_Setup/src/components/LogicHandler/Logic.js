
export const changeHandler = (name,form,props) => {
    console.log("change")
    switch(name){
      case "signUp":
        console.log("inside signup")
        delete form.submitButton;
        break;
    }
    props.formContext.formData = form;
    return;
}