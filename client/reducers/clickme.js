import { TEST_TITLE } from "../actions/types";

const initState = {
  title: ""
};


// able to fire
export default function clickme(state = initState, action = {}) {
  switch(action.type) {
    case TEST_TITLE:
    
      console.log("working?????");
      console.log(action);
    
      return {
        title: action.title
      }

    default:
      return state;
  }
}
