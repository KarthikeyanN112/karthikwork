import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageCard from '../components/PackageCard';

export default function Packages(){
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios.get('http://localhost:4000/packages')
      .then(res => { if(mounted){ setPackages(res.data); setLoading(false); } })
      .catch(err => { if(mounted){ setError(err.message); setLoading(false); } });
    return () => { mounted = false; };
  }, []);

  if(loading) return <div>Loading packages...</div>;
  if(error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h1>Travel Packages</h1>
      <div className="row g-3">
        {packages.map(p => (
          <div className="col-12 col-md-6" key={p.id}>
            <PackageCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}
