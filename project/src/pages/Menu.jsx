import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { menuData } from '../data/menuData'
import './Menu.css'

const Menu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()
  
  // Get unique categories from menu data
  const categories = ['all', ...new Set(menuData.map(item => item.category))]
  
  useEffect(() => {
    // Check if there's a category in the URL query params
    const params = new URLSearchParams(location.search)
    const categoryParam = params.get('category')
    
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam)
    }
    
    filterItems(categoryParam || activeCategory, searchTerm)
  }, [location.search])
  
  useEffect(() => {
    filterItems(activeCategory, searchTerm)
  }, [activeCategory, searchTerm])
  
  const filterItems = (category, term) => {
    let filtered = menuData
    
    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(item => item.category === category)
    }
    
    // Filter by search term
    if (term) {
      const lowercaseTerm = term.toLowerCase()
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(lowercaseTerm) || 
        item.description.toLowerCase().includes(lowercaseTerm)
      )
    }
    
    setFilteredItems(filtered)
  }
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <section className="menu-page section">
      <div className="container">
        <div className="section-header text-center">
          <h1 className="section-title">Our Menu</h1>
          <p className="section-subtitle">
            Explore our wide range of delicious food options
          </p>
        </div>
        
        <div className="menu-search">
          <input 
            type="text" 
            placeholder="Search menu items..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="menu-categories">
          {categories.map((category) => (
            <button 
              key={category} 
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {filteredItems.length === 0 ? (
          <div className="no-items">
            <p>No items found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="menu-grid grid">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="menu-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-item-img" 
                />
                <div className="menu-item-content">
                  <h3 className="menu-item-title">{item.name}</h3>
                  <p className="menu-item-category">{item.category}</p>
                  <p className="menu-item-description">{item.description}</p>
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
        )}
      </div>
    </section>
  )
}

export default Menu