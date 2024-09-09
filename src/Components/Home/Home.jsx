// import React from 'react'
import './Home.css'
import homeImage from '../../Assets/civic.png'

function Home() {
  return (
    <div className='home'>
      <div className='secContainer'>  
        <div className='homeText'>
          <span className='homeSpan'>
            Meet your new car
          </span>
          <h1 className='homeTitle'>
            Honda Civic Type R
          </h1>
          <div className='btns flex'>
            <button className='btn'>
              More Details
            </button>
            <button className='btn primaryBtn'>
              Test Drive
            </button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home