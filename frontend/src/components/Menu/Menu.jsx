import React from 'react'
import './Menu.css'


function Menu({dishes}) {
  return (
    <div className='dishes-container'>
      {dishes.map((dish) => {
                return (
                  <div className="dish-card" key={dish.id} onClick={() => {}}>
                    <img src={dish.image} alt={dish.name} className="dish-image" />
                    <div className="dish-body">
                      <div className="dish-price">Rs. {dish.price}</div>
                      <h3 className="dish-title">{dish.name}</h3>
                      <button className="add-to-cart-button" onClick={(e) => { 
                        e.stopPropagation();  }}> Add to Cart </button>
                    </div>
                  </div>
                );
        })}

    </div>
  )
}

export default Menu
