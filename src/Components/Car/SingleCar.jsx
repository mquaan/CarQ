import PropTypes from 'prop-types';

const SingleCar = ({ image, title, miles, specs, price, sellerStatus }) => {
  return (
    <div className="singleCar grid">
      <div className="imgDiv">
        <img src={image} alt='Car Image' />
      </div>
      <h5 className="carTitle">
        {title}
      </h5>
      <span className='miles'>
        {miles}
      </span>
      <span className='AWD'>
        {specs}
      </span>
      <div className="price_seller flex">
        <span className='price'>
          {price}
        </span>
        <span className='seller'>
          {sellerStatus}
        </span>
      </div>
    </div>
  );
};

SingleCar.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  miles: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sellerStatus: PropTypes.string.isRequired,
};

export default SingleCar;