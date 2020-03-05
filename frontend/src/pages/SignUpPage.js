import React from 'react';
import {withRouter} from 'react-router';

function SignUpPage (props) {
  console.log('SignUpPage',props)
  return (
    <h1>Sigh up page</h1>
  )
};

export default withRouter({SignUpPage});