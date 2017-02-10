import { TOGGLE_FAV_LOCATION, IS_FAV } from "./types";


export function toggleFavLocation(currAddress, lat, lng) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {
    
    // fav array
    let favArr = ["test_location"];
    
    
    // currAddr and addr array
    dispatch({ 
      type: TOGGLE_FAV_LOCATION, 
      currAddress: currAddress,
      favArr: favArr 
    });
    
    /*
    // the star
    dispatch({ 
      type: IS_FAV, 
      currAddress: currAddress,
      isFav: isFav
    });
    */
    
  };
}

