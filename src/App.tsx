import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import StoreTypes from 'StoreTypes';
import UserProfile from './containers/UserProfile/UserProfile';

class App extends Component<any, any> {
  render() {
    return (
      <div className='app-wrapper'>
        <BrowserRouter>
          <Switch>
            <Route path='/:username' component={UserProfile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreTypes.RootState) => ({
});


export default connect(mapStateToProps, null)(App);
