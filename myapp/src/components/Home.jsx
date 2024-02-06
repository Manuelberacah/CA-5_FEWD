// Home.jsx
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import axios from "axios"
import NavBar from './NavBar';

const Home = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want',
          },
        });
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  // Function to filter books based on search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
    <NavBar user={user}></NavBar>
    <div className="home">
      <h1>Bookstore</h1>
      <div className="search-bar">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
        </div>
      
      <BookList books={filteredBooks} />
    </div>
    </>
  );
  
};

export default Home;
