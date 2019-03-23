import { combineEpics } from 'redux-observable';

import * as userEpics from '../features/User/epics';

export default combineEpics(...Object.values(
  {
    ...userEpics
  }
));