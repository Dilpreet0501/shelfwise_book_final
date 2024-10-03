import React, { useRef } from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../../Darkmode';

const Footer = () => {
    const { isDarkMode } = useDarkMode();
    const emailRef = useRef(null);

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('You have subscribed to the newsletter successfully!');
        if (emailRef.current) {
            emailRef.current.value = ''; 
        }
    };

    return (
        <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2 className="logo-text">ShelfWise</h2>
                        <p>
                            ShelfWise.com is your go-to destination for discovering new literary gems.
                            <br />
                            Happy Reading!
                        </p>
                    </div>

                    <div className="footer-section quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/quiz">Explore</NavLink></li>
                            <li><NavLink to="/books">Popular Books</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className={`footer-section subscribe ${isDarkMode ? 'dark' : ''}`}>
                        <h2>Subscribe to our Newsletter</h2>
                        <form id={`subscribe-form ${isDarkMode ? 'dark' : ''}`} onSubmit={handleSubscribe}>
                            <input type="email" name="email" placeholder="Enter your email" required ref={emailRef} />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 All Rights Reserved. Made with ♥ by ShelfWise</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

