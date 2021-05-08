import Questions from './Questions'
// import {useState, useEffects} from 'react'

function Play() {

  return (
    <main className="play">
      <h2>This is the Play Page</h2>
      <p>Here players will get taken through each question and input their decision of WYR</p>

      {/* pass props to map questions and display each question with */}
      <Questions />
    </main>
  )
}

export default Play;