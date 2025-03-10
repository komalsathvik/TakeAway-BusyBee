import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUtensils, FaMotorcycle, FaClock } from 'react-icons/fa'
import { menuData } from '../data/menuData'
import './Home.css'

const Home = ({ addToCart }) => {
  const [popularItems, setPopularItems] = useState([])
  
  useEffect(() => {
    // Get 6 random items from the menu for the popular section
    const shuffled = [...menuData].sort(() => 0.5 - Math.random())
    setPopularItems(shuffled.slice(0, 6))
  }, [])
  
  return (
    <>
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Delicious food" 
          className="hero-bg"
        />
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Delicious Food Delivered To Your Door</h1>
            <p className="hero-subtitle">
              Experience the best takeaway food with our wide range of menu options. 
              From juicy burgers to loaded chips, we've got you covered.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="features section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We pride ourselves on providing the best food and service to our customers
            </p>
          </div>
          
          <div className="features-grid grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3 className="feature-title">Quality Food</h3>
              <p>
                We use only the freshest ingredients to prepare our delicious meals, 
                ensuring you get the best quality food every time.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaMotorcycle />
              </div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p>
                Our dedicated delivery team ensures your food arrives hot and fresh, 
                right to your doorstep in the shortest possible time.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3 className="feature-title">24/7 Service</h3>
              <p>
                Hungry at midnight? No problem! Our service is available 24/7, 
                so you can satisfy your cravings anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="popular-items section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Popular Items</h2>
            <p className="section-subtitle">
              Check out our most popular and delicious menu items
            </p>
          </div>
          
          <div className="menu-grid grid">
            {popularItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="menu-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-item-img" 
                />
                <div className="menu-item-content">
                  <h3 className="menu-item-title">{item.name}</h3>
                  <p className="menu-item-category">{item.category}</p>
                  <p className="menu-item-price">${item.price.toFixed(2)}</p>
                  <div className="menu-item-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-40">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>
      
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Order?</h2>
            <p className="cta-text">
              Satisfy your cravings with our delicious menu. Order now and enjoy the best takeaway experience!
            </p>
            <Link to="/menu" className="btn btn-primary">Order Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home