import React, {useState} from "react";



export const useThrowAsyncError = () => {
    const [state, setState] = useState();
  
    return (error) => {
      setState(() => {throw new Error(error)})
    }
  }