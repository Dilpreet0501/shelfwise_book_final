import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import About from '../../pages/About/about';
import Contact from '../../pages/Contact/contact';
import { useDarkMode } from '../../Darkmode';
import './home.css';

const Home = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <>
      <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
        <div className={`text-content ${isDarkMode ? 'dark' : ''}`}>
          <h1 className={`h1 ${isDarkMode ? 'dark' : ''}`}>
            Book Recommendation Engine
            <FontAwesomeIcon  className={`icon ${isDarkMode ? 'dark' : ''}`} icon={faHandPeace}/>
          </h1>
          <br />
          <br />
          <p className={`p ${isDarkMode ? 'dark' : ''}`}>
            <b>Get perfect book recommendations just for you. Take our Reader Type quiz and discover what to read next.</b>
          </p>
          <br />
          <br />
          <span className={`span ${isDarkMode ? 'dark' : ''}`}>
            Start making custom lists, leave unique book reviews, and receive personalized book recommendations based on your reading personality. Created by book lovers, for book lovers. Bookfinity makes it easy to discover your next favorite read.
          </span>
          <br />
          <br />
          <NavLink to="/quiz">
            <button className={`read-more ${isDarkMode ? 'dark' : ''}`}>Start Quiz</button>
          </NavLink>
        </div>
        <div className={`img-swap ${isDarkMode ? 'dark' : ''}`}>
          {/* Add image or content here */}
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Home;
