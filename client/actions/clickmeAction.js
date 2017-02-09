import { TEST_TITLE } from "./types";


export default function clickmeAction() {

  return (dispatch, getState) => {
     
    
    dispatch({ 
      type: TEST_TITLE,
      title: "working"
    });
    
  };
}

