import { combineReducers } from 'redux';

import search from "./reducers/search";
import toggleFavLocation from "./reducers/toggleFavLocation";
import isFav from "./reducers/isFav";

// any new reducers need to add here.
export default combineReducers({
  search,
  toggleFavLocation,
  isFav
});
