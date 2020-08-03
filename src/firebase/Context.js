import React from 'react';

// react context api to provide firebase singleton
const FirebaseContext = React.createContext(null);

// access to Firebase and render something
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
