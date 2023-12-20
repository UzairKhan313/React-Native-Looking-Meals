import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
export const FavoriteContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsIds((preFavIds) => [...preFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsIds((currFavIds) => {
      currFavIds.filter((currFavId) => currFavId !== id);
    });
  };

  const value = {
    ids: favoritesMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
