import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import StoreTypes from 'StoreTypes';
import Home from './components/Home/Home';

class App extends Component<any, any> {

  render() {
    return (
      <div className='app-wrapper'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreTypes.RootState) => ({
});


export default connect(mapStateToProps, null)(App);
