import React from 'react';
import useCart from '../../features/useShopping';
import Card from '../cart/Card';
import { ThemeContext } from '../../features/ThemeProvider';
import { useContext } from 'react';
function Homepage() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const { data, loading, error } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
 console.log(data);
  return (
    <div className={`container ${theme}`}>
      {data.map(item => (
        <Card key={item.id} data={item} /> 
        
      ))}
    </div>
  );
}

export default Homepage;
