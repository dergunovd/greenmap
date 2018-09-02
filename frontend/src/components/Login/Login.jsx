import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import './styles.sass';
import InputField from '../InputField';
import validate from './validate';

const Login = () => (
  <Container className="login">
    <Grid centered>
      <Grid.Column>
        <Form>
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

export default reduxForm({
  form: 'login',
  validate
})(Login);
