import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});



export const FavoriteContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((currFavIds) => [...currFavIds, id]);
  };

  function removeFavorite(id){
    setFavoriteMealsIds((currFavIds) => {
      return currFavIds.filter((mealId) => mealId !== id);
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
