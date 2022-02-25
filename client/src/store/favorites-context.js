// Used by Card.js

import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (favoriteArt) => {}, // just for autocomplete in IDE, does nothing.
  removeFavorite: (artId) => {},
  itemIsFavorite: (artId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteArt) {
    setUserFavorites((prev) => {
      return prev.concat(favoriteArt);
    });
  }

  function removeFavoriteHandler(artId) {
    setUserFavorites((prev) => {
      return prev.filter((art) => art._id !== artId);
    });
  }

  function itemIsFavoriteHandler(artId) {
    return userFavorites.some((art) => art._id === artId);
  }

  const context = {
    favorites: userFavorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
