import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './styles.sass';
const mapState = {
  center: [51.533103, 46.034158],
  controls: ['geolocationControl', 'typeSelector', 'fullscreenControl'],
  zoom: 12
};

class CityMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
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
      <YMaps>
        <Map state={mapState} height="100vh" width="100vw">
          {this.state.points.map(point => (
            <Placemark
              key={point.id}
              geometry={{ coordinates: [point.lat, point.log] }}
              properties={{ balloonContent: point.title }}
            />
          ))}
        </Map>
      </YMaps>
    );
  }
}

export default CityMap;
