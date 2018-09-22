import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Container, Form, Grid } from 'semantic-ui-react';
import { API_URL } from '../../config';
import InputField from '../InputField';
import './styles.sass';
import validate from './validate';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = values => {
      const { name, lastName, email, password } = values;
      fetch(`${API_URL}/users`, {
        body: JSON.stringify({
          email,
          lastName,
          name,
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
      <Container className="registration">
        <Grid centered>
          <Grid.Column>
            <Form onSubmit={this.props.handleSubmit(this.submitHandler)}>
              <h2>Регистрация</h2>
              <Form.Field>
                <Field
                  name="email"
                  type="email"
                  component={InputField}
                  placeholder="email"
                />
              </Form.Field>
              <Form.Field>
                <Field name="name" component={InputField} placeholder="имя" />
              </Form.Field>
              <Form.Field>
                <Field
                  name="lastName"
                  component={InputField}
                  placeholder="фамилия"
                />
              </Form.Field>
              <Form.Field>
                <Field
                  name="password"
                  type="password"
                  component={InputField}
                  placeholder="пароль"
                />
              </Form.Field>
              <Form.Field>
                <Field
                  name="rePassword"
                  type="password"
                  component={InputField}
                  placeholder="повторите пароль"
                />
              </Form.Field>
              <Button type="submit">Зарегистрироваться</Button>
              <Link to="/login">Уже зарегистрированы?</Link>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'registration',
  validate
})(Registration);
