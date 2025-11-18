import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';

const featured = [
  { id: 1, title: 'Goa Beach', image: '/images/goa.jpg', description: 'Sun, sand and parties.' },
  { id: 2, title: 'Himalayas', image: '/images/himalayas.jpg', description: 'Breathe the mountains.' },
  { id: 3, title: 'Kerala', image: '/images/kerala.jpg', description: 'Gods own country.' },
  { id: 4, title: 'Rajasthan', image: '/images/rajasthan.jpg', description: 'Desert Fun' },
  { id: 5, title: 'Ladakh', image: '/images/ladakh.jpg', description: 'The Peak.' },
  { id: 6, title: 'Sikkim', image: '/images/sikkim.jpg', description: 'North east culture.' }
  
];

export default function Home(){
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (title) => {
    setWishlist(prev => prev.includes(title) ? prev : [...prev, title]);
  };

  return (
    <div>
      <h1 className="mb-4">Featured Destinations</h1>
      <div className="row g-3">
        {featured.map(d => (
          <div key={d.id} className="col-12 col-md-6 col-lg-4">
            <DestinationCard {...d} onAddWishlist={addToWishlist} />
          </div>
        ))}
      </div>
      <hr />
      <h5>Your Wishlist</h5>
      <ul>
        {wishlist.length ? wishlist.map((w,i)=> <li key={i}>{w}</li>) : <li>No items yet</li>}
      </ul>
    </div>
  );
}
