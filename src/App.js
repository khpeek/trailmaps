import React, { Component } from 'react';
import './App.css';
import MapWithGroundOverlay from './components/groundOverlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Custom Overlay</h1>
        </header>
        <MapWithGroundOverlay
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBimnrhiugaGSNN8WnsjpzMNJcrH_T60GI&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
