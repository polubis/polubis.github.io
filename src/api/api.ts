const appKey = '6f2db953bb6847c86c26797fd049f1bb';
const BASE_URL = 'https://api.flickr.com/services/rest/?method=flickr.';
// const API_URL = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${appKey}&gallery_id=72157677774809898&format=json&nojsoncallback=1`;
// const API_URL = `https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${appKey}&user_id=adrian_t&format=json&nojsoncallback=1`;


const methodsPaths: {[key: string]: string} = {
  findByUsername: 'people.findByUsername',
  getUserInfo: 'people.getInfo'
}

const apiEndpoints: {[key: string]: (...params: any) => string} = {
  findByUsername: (username: string) => pathsFactory(methodsPaths.findByUsername, `username=${username}`),
  getUserInfo: (userId: string) => pathsFactory(methodsPaths.getUserInfo, `user_id=${userId}`)
}

const pathsFactory = (methodPath: string, requestDefinition: string, requestConfig = '&format=json&nojsoncallback=1') =>
  `${BASE_URL}${methodPath}&api_key=${appKey}&${requestDefinition}${requestConfig}`;

export const executeRequest = (apiEndpoint: string, ...requestPayload: any[]) => new Promise (async (resolve, reject) => {
  const preparedPath = apiEndpoints[apiEndpoint](...requestPayload);
  try {
    const result = await fetch(preparedPath);
    const data = await result.json();
    resolve(data as any);
  } catch(err) {
    reject(err);
  }
})