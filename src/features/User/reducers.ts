import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';

import * as userActions from './actions';
import * as userActionTypes from './constants';

const uAT = userActionTypes;

export type UserActions = ActionType<typeof userActions>;

export type AuthState = {
  readonly isFetchingUserData: boolean,
  readonly userDetails: object | null,
}

const initialState: AuthState = {
  isFetchingUserData: false,
  userDetails: null
};

const actionsMap: any = {
  [uAT.GET_USER_DETAILS]: (state: AuthState) => ({
    ...state, isFetchingUserData: true
  }),
  [uAT.GET_USER_DETAILS_SUCCESS]: (state: AuthState, { payload }: any) => ({
    ...state, isFetchingUserData: false, userDetails: payload
  }),
  [uAT.GET_USER_DETAILS_FAILURE]: (state: AuthState) => ({
    ...state, isFetchingUserData: false, userDetails: null
  })
};

export default combineReducers ({
  userReducer: (state = initialState, action: UserActions) =>
    actionsMap[action.type] ? actionsMap[action.type](state, action) : state
});



