// import React from 'react'
import './Trending.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'

import SingleCar from '../Car/SingleCar'
import cars from '../../Data/cars'

const CarContainer = () => {
  return (
    <div className="carContainer grid">
      {cars.map((car, index) => (
        <SingleCar 
          key={index}
          image={car.image}
          title={car.title}
          miles={car.miles}
          specs={car.specs}
          price={car.price}
          sellerStatus={car.sellerStatus}
        />
      ))}
    </div>
  );
};

function Trending() {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Trending near you
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <CarContainer />
      </div>
    </div>
  )
}

export default Trending