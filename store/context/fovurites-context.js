import { createContext, useState } from "react";

const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
const favoriteContextProvider = ({ children }) => {


  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};
export default favoriteContextProvider;
