import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './styles.sass';
import { API_URL } from '../../config';
import AddForm from './AddForm';

const mapState = {
  controls: ['geolocationControl', 'typeSelector', 'fullscreenControl'],
  zoom: 12
};

class CityMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [51.533103, 46.034158],
      coords: [],
      create: false,
      points: []
    };

    this.clickHandler = event => {
      if (!window.localStorage.getItem('token')) {
        return;
      }

      if (this.state.create) {
        this.setState({ create: false });

        return;
      }

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

    this.loadPoints = () => {
      fetch(`${API_URL}/events`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => this.setState({ points: data }));
    };
  }

  componentWillMount() {
    this.loadPoints();
  }

  componentWillUpdate() {
    this.loadPoints();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.center !== this.state.center ||
      nextState.coords !== this.state.coords ||
      nextState.create !== this.state.create ||
      nextState.points.length !== this.state.points.length
    );
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
                key={point._id}
                geometry={{ coordinates: [point.lat, point.lon] }}
                properties={{
                  balloonContent: `<h3>${point.title}</h3><p>${
                    point.description
                  }</p>`
                }}
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
          <AddForm
            lat={this.state.coords[0]}
            lon={this.state.coords[1]}
            mapComponent={this}
          />
        )}
      </div>
    );
  }
}

export default CityMap;
