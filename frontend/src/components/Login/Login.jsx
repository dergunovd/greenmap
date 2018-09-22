import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import './styles.sass';
import InputField from '../InputField';
import validate from './validate';

<<<<<<< Updated upstream
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

=======
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };

    this.submitHandler = values => {
      const { email, password } = values;
      this.setState({
        error: ''
      });
      fetch(`${API_URL}/users/auth`, {
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      })
        .then(res => res.status === 200 && res.json())
        .then(res => {
          if (res) {
            window.localStorage.setItem('token', res.token);
            window.location.href = '/';
          } else {
            this.setState({
              error: 'Ошибка авторизации. проверьте логин и пароль'
            });
          }
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
              {this.state.error}
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

>>>>>>> Stashed changes
export default reduxForm({
  form: 'login',
  validate
})(Login);
