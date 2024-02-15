import React, { useEffect, useState } from 'react';
import "./ShoppingCard.css";
import axios from 'axios';

const ShoppingCard = () => {
  const [count, setCount] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setCount(response.data);
        setFilteredItems(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  const filterItems = (catItem) => {
    if (catItem === 'All Products') {
      setFilteredItems(count);
    } else {
      const updateItems = count.filter((curItem) => {
        return curItem.category === catItem;
      });
      setFilteredItems(updateItems);
    }
  };

  return (
    <>

      <div className="container">
        <div className='product-selection'>
          <button onClick={() => { filterItems('All Products') }}>All Products</button>
          <button onClick={() => { filterItems("men's clothing") }}>Clothes</button>
          <button onClick={() => { filterItems("electronics") }}>Electronics</button>
          <button onClick={() => { filterItems("jewelery") }}>Designing Items</button>
        </div>
        <div className='product-category'>
          <div className="row">
            {filteredItems.map((data, index) => { 
              return (
                <div key={index} className='product-hover col-lg-3' >
                  <h2>{data.category}</h2>
                  <img src={data.image} alt="" />
                  <h5>{data.title}</h5>
                  <h5>${data.price}</h5>
                </div>

              );  
            })}
          </div>
        </div>
      </div>

    </>
  );
};
export default ShoppingCard;
