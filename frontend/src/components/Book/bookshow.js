import React from 'react';
import { useDarkMode } from '../../Darkmode';
import './book.css';

const BookShow = ({ image, name, rating, author }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`book-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="dot"></div>
      <img src={image} alt={name} className="book-image" />
      <h2 className="book-name">{name}</h2>
      <p className="book-author">by {author}</p>
      <p className="book-rating">Rating: {rating}</p>
    </div>
  );
};

export default BookShow;

