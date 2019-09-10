import React from 'react';
import { Celsius } from './celsius';
import { Fahrenheit } from './fahrenheit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 20, scale: 'c'}
    this.onCelsiusChange = this.onCelsiusChange.bind(this);
    this.onFahrenheitChange = this.onFahrenheitChange.bind(this);
    this.CtoF = this.CtoF.bind(this);
    this.FtoC = this.FtoC.bind(this);
  }

  CtoF = (cels) => (cels * 1.8) + 32;
  FtoC = (fahr) => (fahr - 32) / 1.8;

  onCelsiusChange = (val) => {
    this.setState({temperature: val, scale: 'c'});
  }

  onFahrenheitChange = (val) => {
    this.setState({temperature: val, scale: 'f'})
  }

  render() {
    const temp = this.state.temperature;
    const celsius = this.state.scale === 'c' ? temp : this.FtoC(temp);
    const fahrenheit = this.state.scale === 'f' ? temp : this.CtoF(temp);
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm"><h3>One of three columns</h3>State is lifted up, but manipulated from both components as well.</div>
          <div class="col-sm"><h3>One of three columns</h3><Celsius temperature={celsius} onTempChange={this.onCelsiusChange} /></div>
          <div class="col-sm"><h3>One of three columns</h3><Fahrenheit temperature={fahrenheit} onTempChange={this.onFahrenheitChange} /></div>
        
        
        </div>
      </div>
    );
  }
}

export default App;
