import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartItem } from "../types/CartItem";
import { Button, Container, Row } from "react-bootstrap";

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        axios.get<CartItem[]>('http://localhost:3002/cart')
            .then(response => setCartItems(response.data))
    }, []);

    const handleIncrement = async (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
      
        try {
          const updatedCartItem = updatedCart[index];
          await axios.put(`http://localhost:3002/cart/${updatedCartItem.id}`, updatedCartItem);
        } catch (error) {
          console.error('Error incrementing quantity:', error);
        }
      };
      
      const handleDecrement = async (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity -= 1;
      
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        }
        setCartItems(updatedCart);
      
        try {
          const updatedCartItem = updatedCart[index];
          await axios.put(`http://localhost:3002/cart/${updatedCartItem.id}`, updatedCartItem);
        } catch (error) {
          console.error('Error decrementing quantity:', error);
        }
      };
      
      const handleDelete = async (index: number) => {
        const updatedCart = [...cartItems];
        const deletedCartItem = updatedCart.splice(index, 1)[0];
        setCartItems(updatedCart);
      
        try {
          await axios.delete(`http://localhost:3002/cart/${deletedCartItem.id}`);
        } catch (error) {
          console.error('Error deleting item from cart:', error);
        }
      };

      const buyTicket = async (index: number) => {
        const boughtTicket = cartItems[index];
    
        try {
          await axios.post('http://localhost:3002/tickets', boughtTicket);
          
          const updatedCart = [...cartItems];
          updatedCart.splice(index, 1);
          setCartItems(updatedCart);
          
          await axios.delete(`http://localhost:3002/cart/${boughtTicket.id}`);
        } catch (error) {
          console.error('Error buying ticket:', error);
        }
      };

    return(
        <Container>
            <h1>Events In Cart</h1>
            <Row>
                {cartItems.map((item, index) => (
                <div key={index} className="card card-class" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {item.title} </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price: {item.price} </li>
                        <li className="list-group-item">Tickets: {item.quantity} </li>
                    </ul>
                    <div className="card-body">
                        <Button className="btn btn-info btn-cart" onClick={() => handleIncrement(index)} >+</Button>
                        <Button className="btn btn-info btn-cart" onClick={() => handleDecrement(index)} >-</Button>
                        <Button className="btn btn-success btn-buy" onClick={() => buyTicket(index)}>Buy</Button>
                        <Button className="btn btn-danger btn-cart btn-delete" onClick={() => handleDelete(index)}>Delete</Button>
                    </div>
                </div>
                ))}
            </Row>
        </Container>
    )

}

export default Cart;
