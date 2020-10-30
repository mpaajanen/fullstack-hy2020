import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old!<br />
      So you were probably born {bornYear()}</p>
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