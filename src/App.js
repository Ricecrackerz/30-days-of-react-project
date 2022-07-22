import React, { Component } from 'react'
import axios from 'axios'
import './styles/cat.css'

const Cat = ({cat: {name, image, origin, temperament,description, life_span, weight}}) => {
  const imageUrl = image ? image.url : "https://picsum.photos/200/300"
  
  return(
    <div className='container'>
      <img src={imageUrl} loading="lazy" alt={name} width = "500px" height = "500px"/>
      <p className='name'>
        {name}
      </p>
      <p>
        {origin}
      </p>
      <p>
        Temperament: {temperament}
      </p>
      <p>
        Life Span: {life_span}
      </p>
      <p>
        Weight: {weight.imperial}
      </p>
      <p>
        Description:
        <br></br>
        {description}
      </p>
    </div>
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