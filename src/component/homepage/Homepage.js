import React from 'react';
import useCart from '../../features/useShopping';
import Card from '../cart/Card';

function Homepage() {
  const { data, loading, error } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='container'>
      {data.map(item => (
        <Card key={item.id} data={item} /> 
      ))}
    </div>
  );
}

export default Homepage;
