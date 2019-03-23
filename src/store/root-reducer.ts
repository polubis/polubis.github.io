
import { combineReducers } from 'redux';

import userReducer from '../features/User/reducers';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;