import React                       from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input/input.js';

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {
  console.log( props );

  return (
    <Form>
      <Field type="email" name="email" componet={Input}/>
      <Field type="password" name="password"/>
      <div onClick={props.submitForm}>login</div>
    </Form>
  );

};

export default withFormik( {
                             mapPropsToValues: () => ({ email: '', password: '' }),
                             initialValues: {
                               email: '',
                               password: '',
                             },
                             handleSubmit,
                           } )( SignInForm );