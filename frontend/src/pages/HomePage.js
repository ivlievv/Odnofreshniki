import React from 'react';
import {withRouter} from 'react-router';

function HomePage (props) {
  console.log(props);
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => {
        props.history.push('./sigh_up')
      }}>SignUp
      </button>
    </>
  );
}

export default withRouter(HomePage);