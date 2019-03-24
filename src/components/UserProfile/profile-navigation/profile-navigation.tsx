import React from 'react';
import { NavLink } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';

import './profile-navigation.scss';

type Props = {
  url: string;
}

const profileNavigation = ({url}: Props) => (
  <nav className='profile-navigation row'>
    <NavLink activeClassName='focused-icon' id='gallery-link' to={url + '/gallery'}>
      <MaterialIcon icon='insert_photo' />
    </NavLink>

    <NavLink activeClassName='focused-icon' to={url + '/details'}>
      <MaterialIcon icon='person' />
    </NavLink>
  </nav> 
);

export default profileNavigation;