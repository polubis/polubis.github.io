import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import StoreTypes from 'StoreTypes';

class App extends Component<any, any> {

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <div>Testing github pages</div>
            )} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state: StoreTypes.RootState) => ({
});


export default connect(mapStateToProps, null)(App);
