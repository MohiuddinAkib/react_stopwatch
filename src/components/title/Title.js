import React , { Component } from 'react'
import './Title.css'

class Title extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'This is a dummy title',
      isInput: false
    }
  }

  inputChange(e) {
    this.setState({
      ...this.state,
      title: e.target.value
    })
  }

  editHandler() {
    this.setState({
      ...this.state,
      isInput: true
    })
  }

  keyPressHandler(e) {
    if(e.which == 13){
      this.setState({
        ...this.state,
        isInput: false
      })
    }
  }

  blurHandler(e) {
    this.setState({
      ...this.state,
      isInput: false
    })
  }

  render () {
    let output = null

    if(this.state.isInput){
      output = (
        <div className="title">
          <input 
            type="text" 
            className="form-control" 
            value={ this.state.title }
            onChange={ e => this.inputChange(e) }
            onKeyPress={ e => this.keyPressHandler(e) }
            onBlur={ e => this.blurHandler(e) }
          />
        </div>
      )
    }else{
      output = (
        <div className="d-flex title">
          <h1 className="display-3">{ this.state.title }</h1>
          <span onClick={ () => this.editHandler() } className="ml-auto edit-icon">
            <i className="fa fa-pencil"></i>
          </span>
        </div>
      )
    }

    return (
      <div>
        { output }
      </div>
    )
  }
}

export default Title;