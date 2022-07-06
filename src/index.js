import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  let hexArray = []
  for (let i = 0; i < 5; i++) {
    for(let j = 0; j < 6; j++){
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    hexArray[i] = '#' + color
    color = ''
  }
  return hexArray
}

const HexaColor = () => (
  hexaColor().map(
    (hex) => <div key={hex} style={{backgroundColor: `${hex}`, fontSize: '25px', textAlign: 'center', padding: '20px', color: 'white'}}>{hex}</div>
    )
  )

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement)