import { isOfType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { filter, debounceTime, map, catchError, switchMap, flatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { RootAction } from 'StoreTypes';
import { UserDetails } from 'Entities';

import { GET_USER_DETAILS } from './constants';
import { executeRequest } from '../../api/api';
import { findByUsername, getUserInfo } from '../../api/constants';
import { getUserDetailsSuccess, getUserDetailsFailure } from './actions';

export const getUserDetailsEpic: Epic<RootAction, RootAction> = (action$) => 
  action$.pipe(
      filter(isOfType(GET_USER_DETAILS)),
      debounceTime(250),
      switchMap(action => {
        return from(executeRequest(findByUsername, action.payload)).pipe(
          flatMap(({user}: any) => {
            return from(executeRequest(getUserInfo, user.id)).pipe(
              map((info: any) => {
                const { description, location, iconfarm, iconserver, photosurl } = info.person;
                const userDetails: UserDetails = {
                  ...user, 
                  username: user.username._content, 
                  description: description._content, 
                  location: location._content, 
                  iconfarm, iconserver, photosurl,
                  buddyIcon: `https://www.flickr.com/buddyicons/${user.nsid}.jpg`,
                  bannerImg: ''
                };
                return getUserDetailsSuccess(userDetails);
              })
            )
          }),
          catchError(err => of(getUserDetailsFailure()))
        )
      }
      )
    );