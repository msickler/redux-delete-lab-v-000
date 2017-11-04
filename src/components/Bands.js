import React, { Component } from 'react';

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <Todo text={band.text} key={index} id={band.id} store={this.props.store}
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
