import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import ISSCrew from './ISSCrew';
import Coordinates from './Coordinates';
import contextISS from '../context/contextISS';

class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.context;
    const ONE_SECOND = 1000;
    setInterval(() => {
      getISSLocation();
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.context; // Só consigo o contexto principal aqui, mas posso usar outros contextos no componente através do consumer Ex: <OutroContexto.Consumer>
    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 20 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
          <div className="map-crew">
            <ISSCrew />
          </div>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    );
  }
}
ISSLocation.contextType = contextISS;
export default ISSLocation;
