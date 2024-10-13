import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <div>
      <h3> SAVING AND INVESTMENT NETWORKING GROUP</h3>
      </div>
        <div>
          
          <div className="home-container">
            <div id="vision">
            <h1 > Vision of SAING</h1>
            </div>
           <div id="mission">
           <h1> Mission of SAING</h1>
           </div>
           <h1> The Values of Saving</h1>
           <ul id="value-list">
            <li className='values'> <p> Community First</p></li>
            <li className='values'> <p> Growing together</p></li>
            <li className='values'> <p>Invest on Generation</p></li>
           </ul>
        
          </div>
          
        </div>
    </div>
  )
}

export default Home