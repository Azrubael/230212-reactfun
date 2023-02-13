import React from "react"

class ClassCounter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.incr = this.incr.bind(this)
    this.decr = this.decr.bind(this)
  }
  
  incr() {
    this.setState({ count: this.state.count + 1 })
    console.log('ClassCounter:  ', this.state.count)
  }
  
  decr() {
    this.setState({ count: this.state.count - 1 })
    console.log('ClassCounter:  ', this.state.count)
  }

  render() {

    return (
      <div>
      <h1>{ this.state.count }</h1>
      <button onClick={ this.incr }>Increment</button>&nbsp;
      <button onClick={ this.decr }>Decrement</button>
      </div>
    )
  }

}

export default ClassCounter