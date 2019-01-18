import React , { Component } from 'react'

class Controller extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start: true,
      pause: false,
      reset: false,
      lap: false
    }
  }

  startHandler() {
    this.setState({
      ...this.state,
      lap: true,
      pause: true,
      start: false
    })

    this.props.start()
  }

  pauseHandler() {
    this.setState({
      ...this.state,
      start: true,
      reset: true,
      pause: false,
      lap: false
    })

    this.props.pause()
  }

  lapHandler() {
    this.props.laps()
  }

  resetHandler() {
    this.setState({
      start: true,
      pause: false,
      reset: false,
      lap: false
    })

    this.props.reset()
  }

  getController() {
    let output = null

    if (this.state.start && !this.state.reset) {
      output = (
        <div>
          <button 
            className="btn btn-success btn-lg px-5"
            onClick={ () => this.startHandler() }
          >
            Start
          </button>
        </div>
      )
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div>
          <button 
            className="btn btn-primary btn-lg px-5 mr-2"  
            onClick={ () => this.pauseHandler() }   
          >
            Pause
          </button>

          <button 
            className="btn btn-warning btn-lg px-5"
            onClick={ () => this.lapHandler() }   
          >
            Lap
          </button>
        </div>
      )
    } else if (this.state.start && this.state.reset) {
      output = (
        <div>
          <button 
            className="btn btn-success btn-lg px-5 mr-2"  
            onClick={ () => this.startHandler() }   
          >
            Start
          </button>

          <button 
            className="btn btn-danger btn-lg px-5"
            onClick={ () => this.resetHandler() }   
          >
            Reset
          </button>
        </div>
      )
    }

    return output
  }

  render() {
    return (
      <div>
        { this.getController() }
      </div>
    )
  }
}

export default Controller