import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Book({ book_name, author_name, genre, page_count, reviews }) {
  return (
    <div>
      <h2>Book: {book_name}</h2>
      <h4>Author: {author_name}</h4>
      <h4>Genre: {genre}</h4>
      <h4>Page count: {page_count}</h4>
      <div>
        <h4>Reviews:</h4>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Book
