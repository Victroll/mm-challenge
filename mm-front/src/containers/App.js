import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailedViewContainer from './PhoneDetailedViewContainer';

class App extends Component {
  render() {
    return (
      <section className='root'>
        <PhoneListContainer />
        <PhoneDetailedViewContainer />
      </section>
    );
  }
}

export default App;
