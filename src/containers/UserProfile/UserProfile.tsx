import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Route, Switch } from 'react-router-dom'; 

import { UserDetails } from 'Entities';
import { RouteComponentProps } from 'react-router';
import { RootState, RootAction } from 'StoreTypes';
import { getUserDetails } from '../../features/User/actions';

import WithHandleLoading from '../../components/hoc/WithHandleLoading';
import ProfileNavigation from '../../components/UserProfile/profile-navigation/profile-navigation';

import './UserProfile.scss';

interface MatchParams {
  username: string;
}

type Props = {
  readonly getUserDetails: (username: string) => RootAction;
  readonly isFetchingUserData: boolean;
  readonly userDetails: UserDetails,
}

class UserProfile extends React.Component<Props & RouteComponentProps<MatchParams>, any> {

  componentDidMount() {
    this.props.getUserDetails(this.props.match.params.username);
  }
  render() {
    const { isFetchingUserData, userDetails, match } = this.props;
    return (
      <WithHandleLoading isLoading={isFetchingUserData} errorOccured={false}>
        
        {userDetails && 
          <div className='user-profile'>
            <header 
              style={{backgroundImage: `url(//farm2.staticflickr.com/1889/coverphoto/163168892@N02_h.jpg?1535854370#163168892@N02`}} 
              className='col'>

              <div style={{backgroundImage: `url(${userDetails.buddyIcon})`}}>
                
              </div>
              
              <figure className='row-c-c'>
                <img src={userDetails.buddyIcon} alt="Trulli" />
              </figure>
            </header>

            <ProfileNavigation 
              url={match.url}
            />

            <main>
              <Switch>
                <Route exact path={match.url + '/gallery'} render={() => (
                  <div>gallery</div>
                )}/>
                <Route exact path={match.url + '/details'} render={() => (
                  <div>details</div>
                )}/>
              </Switch>

            </main>
          </div>
        }

      </WithHandleLoading>
    );
  }
}

const mapStateToProps = ({user}: RootState) => ({
  isFetchingUserData: user.userReducer.isFetchingUserData,
  userDetails: user.userReducer.userDetails,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => 
  bindActionCreators(
    {
      getUserDetails
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

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