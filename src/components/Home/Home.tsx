import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getUserDetails } from '../../features/User/actions';

import './Home.scss';
import { RootState, RootAction } from 'StoreTypes';

type HomeProps = {
  getUserDetails: (username: string) => RootAction;
}

type HomeState = {
  readonly username: string;
}

const getInitialState = (): HomeState => ({
  username: 'Smithsonian Institution'
});

class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = getInitialState();

  componentDidMount() {
    this.props.getUserDetails(this.state.username);
  }
  
  render() {
    return (
      <div className='user-profile'>

      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => 
  bindActionCreators(
    {
      getUserDetails
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => 
//   bindActionCreators(
//     {

//     }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

// componentDidMount(){
//   alert(process.env.REACT_APP_API_KEY);
//   fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1')
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(j){
//     alert(JSON.stringify(j));
//     let picArray = j.photos.photo.map((pic) => {
      
//       var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
//       return(
//         <img alt="dogs" src={srcPath}></img>
//       )
//     })
//     this.setState({pictures: picArray});
//   }.bind(this))
// }