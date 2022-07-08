import React from 'react'
import ReactDOM from 'react-dom'

const hexaColor = () => {
  let str = '0123456789ABCDEF'
  let color = ''
  let hexArray = []
  for (let i = 0; i < 32; i++) {
    for(let j = 0; j < 6; j++){
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    hexArray[i] = '#' + color
    color = ''
  }
  return hexArray
}

const hexData = hexaColor()

const NumberTile = ({props}) => {
  return (
    <div style={{backgroundColor: `${props}`, color: 'white', width: '150px', height: '150px'}}>
      <h2 style={{lineHeight: '150px'}}>{props}</h2>
    </div>
  )
}

const NumberTiles = ({data}) => {
  const tileList = data.map((tile) => (
    <NumberTile key={tile} props={tile}/>
  ))
  return tileList
}

// App component
const App = () => (
<div style={{textAlign: 'center'}}>
  <h1>30 Days of React</h1>
  <h2>Hexadecimal Colors</h2>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 150px)', margin: 'auto', padding: '10px', width: '65%'}}>
    <NumberTiles data={hexData}/>
  </div>
</div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)