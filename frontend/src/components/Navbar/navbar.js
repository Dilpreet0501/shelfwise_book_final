import React, { useState, useRef } from 'react';
import { FaSun, FaMoon, FaSearch, FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../Darkmode';
import axios from 'axios';
import './navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();  
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') return; 

    console.log('Searching for:', searchQuery);

    try {
      const response = await axios.post('https://shelfwise-backend-render.onrender.com/booksget', {  
        book_name: searchQuery
      });
       
      const data = response.data;
      if (response.status === 200) {
        console.log(data.getbooks);
        navigate('/books', { state: { recommendations: data.getbooks } });
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    setSearchQuery(''); 
    if (navRef.current) {
      navRef.current.value = ''; 
    }
  };

  const switchPage = async () => {
    try {
      const response = await axios.get('https://shelfwise-backend-render.onrender.com/high-rated');
      const data = response.data;
      if (response.status === 200) {
        console.log(data);
        navigate('/books', { state: { recommendations: data } });
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className='bar'>
      <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='container'>
      <div className={`nav ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-brand">
          <div className={`logo ${isDarkMode ? 'dark' : 'light'}`} />
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About Us</NavLink></li>
            <li><NavLink to="/quiz" >Explore</NavLink></li>
            <li onClick={ switchPage } style={{ cursor: 'pointer' }}>Popular Books</li>
            <li><NavLink to="/contact" >Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={handleSearchSubmit} className={`search-form ${isDarkMode ? 'dark':''}`}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              ref={navRef}
            />
            <button type="submit" className={`search-button ${isDarkMode ? 'dark':''}`}>
              <FaSearch />
            </button>
          </form>
          <button onClick={toggleDarkMode} className="mode-toggle">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        </div>
        <div className={`dropdown ${menuOpen ? 'active':''}`}>
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About Us</NavLink></li>
            <li><NavLink to="/quiz" >Explore</NavLink></li>
            <li onClick={ switchPage } style={{ cursor: 'pointer' }}>Popular Books</li>
            <li><NavLink to="/contact" >Contact Us</NavLink></li>
          </ul>
        </div>
        </div>
      
      </nav>
      
    </div>
  
  );
};

export default Navbar;


