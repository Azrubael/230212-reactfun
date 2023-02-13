import React from "react"
import MyButton from "./UI/button/MyButton"

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
      <h3>{ this.state.count }</h3>
      <MyButton disabled={false} onClick={ this.incr }>Increment</MyButton>&nbsp;
      <MyButton disabled={false} onClick={ this.decr }>Decrement</MyButton>

      </div>
    )
  }

}

export default ClassCounter