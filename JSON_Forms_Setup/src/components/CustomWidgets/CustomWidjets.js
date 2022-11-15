const CustomButton = (props)=>{
    const {options} = props;
    const {value} = options;
     return(
     <button
     style={value.style}
     onClick= {()=>props.formContext.handler(value.eventName,props)}
    >{value.content}</button>) 
  }
  const CustomLabel = (props)=>{
    const {options} = props;
    const {value} = options;
     return(
     <div
     style={value.style}>{value.content}</div>) 
  }
  // const CustomDiv = (props)=>{
  //   const {options} = props;
  //   const {value} = options;
  //   console.log(props.formContext.data)
  //    return(
  //    <div
  //    style={value.style}>{
  //     props.formContext.data?props.formContext.data.map((elem)=>{
  //       return(
  //         <div>
  //           {elem.id}
  //         </div>
  //       )
  //     }):"Data is coming"
  //    }</div>) 
  // }
  export const widgets = {
    CustomButton: CustomButton,
    CustomLabel: CustomLabel,
    // CustomDiv:CustomDiv
  };

