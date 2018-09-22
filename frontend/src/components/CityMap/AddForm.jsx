import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Header } from 'semantic-ui-react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import { API_URL } from '../../config';
import InputField from '../InputField';
import SelectField from '../SelectField';
import TextAreaField from '../TextAreaField';
import validate from './validate';

const eventsTypeOptions = [
  {
    key: 1,
    text: 'Облагородить территорию',
    value: 1
  },
  {
    key: 2,
    text: 'Убрать свалку',
    value: 2
  },
  {
    key: 3,
    text: 'Посадить дерево',
    value: 3
  }
];

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.sendEvent = values => {
      const { title, type, description, lat, lon } = values;
      fetch(`${API_URL}/events`, {
        body: JSON.stringify({
          description,
          lat,
          lon,
          title,
          token: window.localStorage.getItem('token'),
          type
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
        .then(res => res.status === 200 && res.json())
        .then(() => {
          this.props.mapComponent.setState({ create: false });
        });
    };
  }

  componentWillMount() {
    const { initialize, lat, lon } = this.props;
    initialize({
      lat,
      lon
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="create-form">
        <Form onSubmit={handleSubmit(this.sendEvent)}>
          <Header>Создать событие</Header>
          <Form.Field>
            <Field
              name="title"
              component={InputField}
              placeholder="Название события"
            />
          </Form.Field>
          <Form.Field>
            <Field
              name="type"
              component={SelectField}
              placeholder="Тип события"
              options={eventsTypeOptions}
            />
          </Form.Field>
          <Form.Field>
            <Field
              name="description"
              component={TextAreaField}
              placeholder="Описание события"
            />
          </Form.Field>
          <Button type="submit" color="green">
            Добавить
          </Button>
        </Form>
      </div>
    );
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  mapComponent: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'createEvent',
  validate
})(AddForm);
