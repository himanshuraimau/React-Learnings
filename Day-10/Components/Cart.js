import React from "react";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div>
            <h1 className="cart-container">Cart Items- {cartItems.length}</h1>
             {cartItems.map((item)=> <FoodItem key={item.id} {...cartItems[0]} /> )}
           
        </div>
    );
}


export default Cart;