import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ cartItemsCount, isLoggedIn, logout }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [location])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <img src='/images/TakeAwayLogo.jpg'></img>
        </div>
      <div className="container navbar-container">
        
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
                Menu
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="navbar-actions">
          <Link to="/cart" className="navbar-cart">
            <FaShoppingCart />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
          
          {isLoggedIn ? (
            <div className="navbar-user">
              <FaUser />
              <div className="user-dropdown">
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="navbar-login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar