import { createContext, useEffect } from "react";
import { useState } from "react";
import SHOP_DATA from "../shop-data";
import {
  addCollectionandDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  //We used this just to push data to firebase from shop-data.js file
  // useEffect(addCollectionandDocuments("categories", SHOP_DATA), []);

  //cant use direct async in use effect we need to create another async function

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
