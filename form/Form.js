import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)

      this.state = {
        username: 'text'
      }
    }
    
    handleUsernameChange = (event) => {
      this.setState({
          username: event.target.value
      })
    }

  render() {
    return (
      <form>
        <div>
            <label>Username</label>
            <input type="text"
                   value={this.state.username}
                   onChange={this.handleUsernameChange}
            />
        </ div>
        <div>
            <label> Comments</label>
            <textarea></ textarea
      </ form>
    )
  }
}

export default Form