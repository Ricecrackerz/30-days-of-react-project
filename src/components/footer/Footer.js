import React from 'react'
import ReactDOM from 'react-dom'

// Footer Component
// Class component
class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }

  export default Footer