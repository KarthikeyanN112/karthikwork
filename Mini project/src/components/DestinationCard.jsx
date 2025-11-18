import React from 'react';
import PropTypes from 'prop-types';

export default function DestinationCard({title, image, description, onAddWishlist}){
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-primary" onClick={() => onAddWishlist(title)}>Add to Wishlist</button>
          <small className="text-muted">See details</small>
        </div>
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  onAddWishlist: PropTypes.func
};
