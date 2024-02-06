// BookList.jsx
import React from 'react';

const BookList = ({ books }) => {
    console.log(books)
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>FREE</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
