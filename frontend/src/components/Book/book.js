import React from 'react';
import { useLocation } from 'react-router-dom';
import BookShow from './bookshow.js';

const Book = () => {
  const location = useLocation();
  const { state } = location;
  const books = state ? state.recommendations: [];
  
  return (
    <div className="bookie">
      <div className="books-container">
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <BookShow
              key={index}
              image={book.image_url}
              name={book.title}
              rating={book.average_rating.toFixed(1)}  
              author={book.author}
            />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Book;


