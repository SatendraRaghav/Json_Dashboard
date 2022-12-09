import React, { useReducer, createContext, useMemo } from "react";
export const DataContext = createContext< any| undefined>(undefined); 
export const actions = {
    changeUrl:"changeUrl",
    resetFormData:"resetFormData",
    resetRecordsApi:"recordsApi"
  }
const initialState = {
  url:false,
  formData:{},
  recordsApi:" "
};
const reducer = (state:any, action:any) => {
    switch (action.type) {
        case actions.changeUrl:
          return {
           ...state,url:!(state.url)
          };
          case actions.resetFormData:
          return {
           ...state,formData:action.payload
          };
          case actions.resetRecordsApi:
          return {
           ...state,recordsApi:action.payload
          };
        default:
          return state;
  }
};
export const DataProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 console.log(state)
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};