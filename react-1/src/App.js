import React, { useState } from "react";

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "أبو بكر الرازي",
      isbn: "893847239479",
    },
    ,
    {
      id: 3,
      title: "تفسير الأحلام",
      author: "ابن سيرين",
      isbn: "983478239847",
    },
    {
      id: 3,
      title: "تفسير الأحلام",
      author: "ابن سيرين",
      isbn: "983478239847",
    },
  ],
};

function App() {
  const [state] = useState(initState);

  const books = state.books;

  return (
    <div
      style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
      }}
    >
      {books.map((book) => (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            boxShadow: "0 4px 8px rgba(255, 0, 0, 0.1)",
            backgroundColor: "#ddd",
          }}
        >
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.isbn}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
