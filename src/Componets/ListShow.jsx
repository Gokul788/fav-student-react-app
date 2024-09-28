import React, { createContext, useState } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {

  const [students] = useState([
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Zlatan Ibrahimovic",
    "Eden Hazard",
    "Robert Lewandowski",
    "Wesley Sneijder",
    "Leonardo Bonucci",
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <StudentsContext.Provider
      value={{ students, favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </StudentsContext.Provider>
  );
};
