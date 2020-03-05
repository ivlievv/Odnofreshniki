import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types'

class SignInForm extends Component{

  renderFormik = (formikProps) => {
    console.log(formikProps);
    return(
      <Form>
        <Field type="email" name="email"/>
        <Field type="password" name="password"/>
      </Form>
    )
  }

  handleSubmit = (values) => {
    console.log(values)
  };

  render () {
    const {} =this.props;
    return (
      <Formik onSubmit={this.handleSubmit} initialValues={{
        password:'',
        email:'',

      }}>
        {
          this.renderFormik()
        }
      </Formik>
    );
  }
}

s

export default SignInForm;