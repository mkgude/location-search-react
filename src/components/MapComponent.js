
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "\\100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={	40.730610 }
            lng={-73.935242}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;