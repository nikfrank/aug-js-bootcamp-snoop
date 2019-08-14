import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    rapName: 'notorious NIK',
    albumSales: 1000000,
  }

  done = ()=> {
    console.log('done the form yo');
  }

  setRapName = (event)=> {
    this.setState({
      rapName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className='form'>

          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.rapName} onChange={this.setRapName} />
              <span className='title'>Rap Name</span>
            </label>
          </div>

          <div className='done-container'>
            <button onClick={this.done} className='done-button'>
              DONE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
