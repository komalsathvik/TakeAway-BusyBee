import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa'
import './Cart.css'

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false)
  
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = subtotal > 0 ? 3.99 : 0
  const total = subtotal + deliveryFee
  
  const handleCheckout = () => {
    // In a real app, this would handle payment processing
    setOrderPlaced(true)
    clearCart()
  }
  
  if (orderPlaced) {
    return (
      <div className="order-success section">
        <div className="container">
          <div className="order-success-content">
            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your order. Your delicious food is on its way!</p>
            <p>Order number: #{Math.floor(Math.random() * 10000)}</p>
            <Link to="/menu" className="btn btn-primary">Order More Food</Link>
          </div>
        </div>
      </div>
    )
  }
  
  if (cart.length === 0) {
    return (
      <div className="cart-empty section">
        <div className="container">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/menu" className="btn btn-primary">
            <FaArrowLeft /> Browse Menu
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <section className="cart-page section">
      <div className="container">
        <h1 className="section-title">Your Cart</h1>
        
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-img" 
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                    className="quantity-input"
                    min="1"
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              className="btn btn-primary checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            <div className="cart-actions">
              <Link to="/menu" className="continue-shopping">
                Continue Shopping
              </Link>
              <button 
                className="clear-cart"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart