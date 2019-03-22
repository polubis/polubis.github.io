import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import StoreTypes from 'StoreTypes';

class App extends Component<any, any> {

  render() {
    return (
      <>
     dasdasdasdsdsadsadsa
        <BrowserRouter>
          <Switch>

          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state: StoreTypes.RootState) => ({
});


export default connect(mapStateToProps, null)(App);
