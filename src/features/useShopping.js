import React, { useEffect, useState } from "react";
import axios from "axios";

const useShopping = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch product
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      console.log(response.data); 
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  {/*useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);*/}

  return { data, loading, error,setData };
};

export default useShopping;
