import { isOfType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { filter, debounceTime, map, catchError, switchMap, flatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { RootAction } from 'StoreTypes';
import { FlickrUser, UserDetails } from 'Entities';

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
          flatMap((response: any) => {
            const user = response.user as FlickrUser;
            return from(executeRequest(getUserInfo, user.id)).pipe(
              map((info: any) => {
                const { description, location, iconfarm, iconserver, photosurl } = info.person 
                const userDetails: UserDetails = {
                  ...user, description, location, iconfarm, iconserver, photosurl,
                  buddyIcon: `http://farm${iconfarm}.staticflickr.com/${iconserver}/buddyicons/${user.nsid}.jpg`,
                  bannerImg: ''
                }
                console.log(info.person);
                console.log(userDetails);
                
                return getUserDetailsSuccess();
              })
            )
          }),
          catchError(err => of(getUserDetailsFailure()))
        )
      }
       
      )
    );