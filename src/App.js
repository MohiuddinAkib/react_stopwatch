import React, { Component } from 'react';
import './App.css';
import Title from './components/title/Title'
import CountDown from './components/countDown/CountDown'
import Controller from './components/controller/Controller'
import Laps from './components/laps/Laps'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    }
  }

  getStart() {
    this.interValId = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if (mili >= 10) {
        sec = sec + 1;
        mili = 0
      }

      if (sec >= 60) {
        min = min + 1;
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      })
    }, 100)
  }

  getPause() {
    clearInterval(this.interValId)
  }

  getLaps() {
    let time = {
      ...this.state.time
    }

    this.setState({
      ...this.state,
      laps: [time , ...this.state.laps]
    })

    console.log(this.state.laps)
  }

  getReset() {
    this.setState({
        time: {
          min: 0,
          sec: 0,
          mili: 0
        },
        laps:[]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-8">
              <Title/>
              <CountDown time={ this.state.time }/>
              <Controller 
                start={ this.getStart.bind(this) } 
                pause={ this.getPause.bind(this) } 
                reset={ this.getReset.bind(this) }
                laps={ this.getLaps.bind(this) }
              />
              <Laps laps={ this.state.laps }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
