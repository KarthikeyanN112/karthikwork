import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PackageCard({id, title, price, duration, image, description}){
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{duration} • ${price}</small></p>
            <Link to="/booking" state={{packageId: id}} className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

PackageCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  duration: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};
