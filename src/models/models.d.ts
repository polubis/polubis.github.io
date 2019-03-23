declare module 'Entities' {
  export type FlickrUser = {
    id: string;
    nsid: string;
    username: string;
  }

  export type UserDetails = {
      id: string;
      nsid: string
      username: string,
      description: string, 
      location: string,
      photosurl: string,
      iconfarm: string,
      iconserver: string,
      buddyIcon: string;
      bannerImg: string;
  }
}