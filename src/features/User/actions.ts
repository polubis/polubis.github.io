import { action } from 'typesafe-actions';
import { UserDetails } from 'Entities';

import * as userActionTypes from './constants';

const uAt = userActionTypes;

export const getUserDetails = (userId: string) => action(uAt.GET_USER_DETAILS, userId);
export const getUserDetailsSuccess = (userDetails: UserDetails) => action(uAt.GET_USER_DETAILS_SUCCESS, userDetails);
export const getUserDetailsFailure = () => action(uAt.GET_USER_DETAILS_FAILURE);