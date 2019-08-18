import React from 'react';
import './App.css';

import emailRegex from './emailRegex';
import goldRecord from './goldRecord.png';

class App extends React.Component {

  state = {
    rapName: 'notorious NIK',
    albumSales: 1000000,

    email: '',
    isEmailValid: false,

    job: '',
  }

  done = ()=> {
    console.log('done the form yo');
  }

  setRapName = (event)=> {
    this.setState({
      rapName: event.target.value
    });
  }

  setEmail = (event)=>
    this.setState({
      email: event.target.value,
      isEmailValid: emailRegex.test( event.target.value ),
    })

  setAlbumSales = event=> this.setState({ albumSales: event.target.value })

  setJob = event=> this.setState({ job: event.target.value })

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

          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.email} onChange={this.setEmail} />
              <span className='title'>Email</span>
              {
                (!this.state.isEmailValid && this.state.email) ? (
                  <span className='invalid-email'>
                    Please enter a valid email
                  </span>
                ) : null
              }
            </label>
          </div>

          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.albumSales}
                     type='number'
                     step={10000}
                     onChange={this.setAlbumSales} />
              <span className='title'>Album Sales</span>
              {
                this.state.albumSales >= 1000000 ? (
                  <div className='record-container'>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                      .filter(sales => sales * 1000000 <= this.state.albumSales)
                      .map(sales=> (
                        <div className='gold-record' key={sales}>
                          <img src={goldRecord} />
                        </div>
                      ))
                    }

                  </div>
                ) : null
              }
            </label>
          </div>

          <div className='card swanky-input-container'>
            <label>
              <select value={this.state.job} onChange={this.setJob}>
                <option value=''>Select a Job</option>
                <option value='rapper'>Rapper</option>
                <option value='producer'>Producer</option>
                <option value='distributor'>Distributor</option>
              </select>
              <span className='title'>Job</span>
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
