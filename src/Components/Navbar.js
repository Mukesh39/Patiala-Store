 import React from 'react' ; 
 import { Link } from 'react-router-dom';
 import {useSelector } from 'react-redux';

const Navbar = () => {
 
const items = useSelector((state)=> state.cart); 


  return (
    
  <div style={{display:'flex' , alignItems:'center', justifyContent:'space-between'}}>
  
        <span className='logo'> <img src="https://e7.pngegg.com/pngimages/1011/362/png-clipart-aliexpress-online-shopping-mobile-app-android-ali-logo-angle-orange.png" alt="" srcset="" /> </span>
          <div>
            <Link   className="navLink"  to = "/"> Home</Link>
            <Link   className="navLink" to = "/cart">Cart</Link>
            <span className="cartCount">cart Item : {items.length}</span>
          </div>
       </div>
  )
}

export default Navbar ; 