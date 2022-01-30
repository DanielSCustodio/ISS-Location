import React, { Component } from 'react';
import { getCurrentISSLocation } from '../services/issAPI';
import contextISS from './contextISS';

class ISSProvider extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      isLoading: false,
    };
    this.getISSLocation = this.getISSLocation.bind(this);
  }

  async getISSLocation() {
    const result = await getCurrentISSLocation();
    this.setState({
      latitude: Number(result.iss_position.latitude),
      longitude: Number(result.iss_position.longitude),
    });
  }

  render() {
    const { children } = this.props;
    return (
      <contextISS.Provider
        value={
          { ...this.state, getISSLocation: this.getISSLocation }
        }
      >
        {children}
      </contextISS.Provider>
    );
  }
}

export default ISSProvider;
