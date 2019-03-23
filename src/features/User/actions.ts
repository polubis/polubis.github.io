import { action } from 'typesafe-actions';

import * as userActionTypes from './constants';

const uAt = userActionTypes;

export const getUserDetails = (userId: string) => action(uAt.GET_USER_DETAILS, userId);
export const getUserDetailsSuccess = () => action(uAt.GET_USER_DETAILS_SUCCESS);
export const getUserDetailsFailure = () => action(uAt.GET_USER_DETAILS_FAILURE);