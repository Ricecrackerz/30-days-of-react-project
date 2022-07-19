import React, { Component } from 'react'
import axios from 'axios'

const Cat = ({cat: {name}}) => {
  return(
    <p>
      {name}
    </p>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount(){
    this.fetchCatData()
  }

  fetchCatData =  async () => {
    const URL = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(URL)
      const fetchData = await response.data
      this.setState({data: fetchData})
    }catch(e){
      console.log(e)
    }
  }

  render()  {
    return(
      <div className = 'App'>
        <h1>
          30 Days of React
        </h1>
        <h2>
          Cats Paradise
        </h2>
        <p>
          There are {this.state.data.length} cat breeds
        </p>
        <div>
          {this.state.data.map((cat) => (
            <Cat cat={cat}/>
          ))}
        </div>
      </div>
    )
  }
}


export default App