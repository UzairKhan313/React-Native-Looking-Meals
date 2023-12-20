import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
const favoriteContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsIds((preFavIds) => [...preFavId, id]);
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
export default favoriteContextProvider;
