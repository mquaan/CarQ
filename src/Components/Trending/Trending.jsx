// import React from 'react'
import './Trending.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'

import ford from '../../Assets/ford.png'
import chevy from '../../Assets/chevy.jpg'

import Car from '../Car/Car'

const CarContainer = () => {
  // Define car data
  const cars = [
    {
      image: ford,
      title: 'Used 2019 Ford F-150',
      miles: '22,000 miles',
      specs: 'AWD 4-Cylinder Turbo',
      price: '$32,000',
      sellerStatus: 'Best Seller'
    },
    {
      image: chevy,
      title: 'Used 2020 Chevy Silverado',
      miles: '18,000 miles',
      specs: 'AWD V6 Turbo',
      price: '$35,000',
      sellerStatus: 'New Arrival'
    },
    // Add more car objects as needed
  ];

  return (
    <div className="carContainer grid">
      {cars.map((car, index) => (
        <Car 
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

        {/* <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={ford} alt='Car Imge'/>
            </div>
            <h5 className="carTitle">
              Used 2019 Ford F-150
            </h5>
            <span className='miles'>
              22,000 miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className='price'>
                $32,000
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>
        </div> */}
        <CarContainer />
      </div>
    </div>
  )
}

export default Trending