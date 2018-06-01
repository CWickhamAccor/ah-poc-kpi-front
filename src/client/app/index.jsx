import React from 'react';
import {render} from 'react-dom';
import Chart from './Chart.jsx';
import ChartIntents from './ChartIntents.jsx';

class App extends React.Component {
  render () {
    // return <ChartIntents/>;
    return <Chart/>
  }
}

render(<App/>, document.getElementById('app'));