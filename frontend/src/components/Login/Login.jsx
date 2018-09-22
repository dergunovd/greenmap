import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Container, Form, Grid } from 'semantic-ui-react';
import { API_URL } from '../../config';
import InputField from '../InputField';
import './styles.sass';
import validate from './validate';

class Login extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = values => {
      const { email, password } = values;
      fetch(`${API_URL}/users`, {
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
        .then(res => res.json())
        .then(res => {
          this.localStorage.token = res.token;
          window.location.href = '/';
        });
    };
  }

  render() {
    return (
      <Container className="login">
        <Grid centered>
          <Grid.Column>
            <Form onSubmit={this.props.handleSubmit(this.submitHandler)}>
              <h2>Авторизация</h2>
              <Form.Field>
                <Field
                  name="email"
                  type="email"
                  component={InputField}
                  placeholder="email"
                />
              </Form.Field>
              <Form.Field>
                <Field
                  component={InputField}
                  name="password"
                  placeholder="пароль"
                  type="password"
                />
              </Form.Field>
              <Button type="submit">Войти</Button>
              <Link to="/registration">Еще не зарегистрированы?</Link>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default reduxForm({
  form: 'login',
  validate
})(Login);
