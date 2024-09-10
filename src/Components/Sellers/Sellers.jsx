// import React from 'react'
import './Sellers.css'
import PropTypes from 'prop-types';

import sellerImage1 from '../../Assets/toyota_logo.jpg'
import sellerImage2 from '../../Assets/merc_logo.jpg'
import sellerImage3 from '../../Assets/volk_logo.jpg'
import sellerImage4 from '../../Assets/hyundai_logo.jpg'

const SingleSeller = ({ img, name, price }) => {
  return (
    <div className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img} alt="" className='img'/>
      </div>
      <span className='info'>
        <h4 className='name'>{name}</h4>
        <p>from ${price}</p>
      </span>
    </div>
  )
}

function Sellers() {
  return (
    <div className='sellers section'>
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">
            Explore top sellers
          </h3>

          <p>
            NMQ holds the Guinnes World Record for being the greatest salesman in the world.
          </p>
        </div>
        <div className="sellersContainer">
          <SingleSeller img={sellerImage1} name='Toyota' price='40k' />
          <SingleSeller img={sellerImage2} name='Mercedes Benz' price='60k' />
          <SingleSeller img={sellerImage3} name='Volkswagen' price='50k' />
          <SingleSeller img={sellerImage4} name='Hyundai' price='35k' />
        </div>
        

      </div>
    </div>
  )
}

SingleSeller.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Sellers