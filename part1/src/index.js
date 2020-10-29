import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Laura'
  const ika = 38
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Mikko" age={10+10+10+8} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by Mikko Paajanen
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))