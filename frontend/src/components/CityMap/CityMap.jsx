import React, { PureComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './styles.sass';
import { Field, reduxForm } from 'redux-form';
import { Button, Header, Form } from 'semantic-ui-react';
import InputField from '../InputField';
import SelectField from '../SelectField';
import TextAreaField from '../TextAreaField';
import validate from './validate';

const mapState = {
  controls: ['geolocationControl', 'typeSelector', 'fullscreenControl'],
  zoom: 12
};
const eventsTypeOptions = [
  {
    key: 1,
    text: 'Облагородить территорию',
    value: 1
  },
  {
    key: 1,
    text: 'Убрать свалку',
    value: 2
  },
  {
    key: 1,
    text: 'Посадить дерево',
    value: 3
  }
];

class CityMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      center: [51.533103, 46.034158],
      coords: [],
      create: false,
      points: []
    };

    this.clickHandler = event => {
      const coords = event.get('coords');
      const map = event.get('map');
      map.panTo(coords, {
        duration: 500
      });
      setTimeout(() => {
        this.setState({
          center: coords,
          coords,
          create: true
        });
      }, 500);
    };
  }

  componentWillMount() {
    fetch('https://www.mocky.io/v2/5b8c5b582f0000a20cceebf2', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ points: data }));
  }

  render() {
    return (
      <div>
        <YMaps>
          <Map
            state={{
              ...mapState,
              center: this.state.center
            }}
            height="100vh"
            width="100vw"
            onClick={this.clickHandler}
          >
            {this.state.points.map(point => (
              <Placemark
                key={point.id}
                geometry={{ coordinates: [point.lat, point.log] }}
                properties={{ balloonContent: point.title }}
              />
            ))}
            {this.state.create && (
              <Placemark
                geometry={{ coordinates: this.state.coords }}
                options={{
                  iconColor: 'red',
                  preset: 'islands#circleIcon'
                }}
              />
            )}
          </Map>
        </YMaps>
        {this.state.create && (
          <div className="create-form">
            <Form>
              <Header>Создать событие</Header>
              <Form.Field>
                <Field
                  name="name"
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
              <Button type="submit">Добавить</Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: 'createEvent',
  validate
})(CityMap);
