import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.sass';
import InputField from '../InputField';
import validate from './validate';

const Registration = () => (
  <Container className="registration">
    <Grid centered>
      <Grid.Column>
        <Form>
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
              name="lastname"
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

export default reduxForm({
  form: 'registration',
  validate
})(Registration);
