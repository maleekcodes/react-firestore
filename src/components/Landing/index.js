import React from 'react'
import {FirebaseContext} from '../Firebase/';

const Landing = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>I've access to firebase and render some shit </div>;
        }}
    </FirebaseContext.Consumer>
);

export default Landing;