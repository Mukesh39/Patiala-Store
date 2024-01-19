import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../store/cartSlice';


const Cart = () => {

  const dispatch = useDispatch(); 

  const products = useSelector((state)=> state.cart) ; 


  const handleRemove =(productID)=> {

      dispatch(remove(productID)); 
  }



  // const handleRemove = (productID) => {
  //   const indexToRemove = products.findIndex((product) => product.id === productID);
  
  //   if (indexToRemove !== -1) {
  //     dispatch(remove(productID));
  //   }
  // };



  return (
    <div>
    
    <h3>Cart</h3>
    <div className="cartWrapper" >
    
     {
         products.map((product ,index)=> (
          <div key={product.id + index} className="cartCard">
           <img src={product.image} alt="img"  />
           <h5>{product.title}</h5>
           <h5>{product.price}</h5>
           <button onClick={()=> handleRemove(product.id)} className='btn'>Remove</button>
          </div>
         ) )

     }
    
    </div>
    </div>
  )
}

export default Cart ; 