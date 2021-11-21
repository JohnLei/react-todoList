import React, { Component, createContext, useContext } from 'react'

const appContext = createContext()
class Foo extends Component {
  static contextType = appContext
  render() {
    const value = this.context
    return (
      <div>Foo组件接收的值为{value}</div>
    )
  }
}
const Bar = () => {
  return (
    <appContext.Consumer>
      {value =>  <div>Bar组件接收的值为{value}</div>}
    </appContext.Consumer>
  )
}
const Baz = () => {
  const value = useContext(appContext)
  return (
    <div>Baz组件接收的值为{value}</div>
  )
}
const Midde = () => {
  return (
    <div>
      <Foo/>
      <Bar/>
      <Baz/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <appContext.Provider value='guolei'>
        <Midde/>
      </appContext.Provider>
    </div>
  );
}
export default App;
