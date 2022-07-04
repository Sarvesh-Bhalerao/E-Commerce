// import SHOP_DATA from "../../../shop-data.json";

import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";
// import { ProductsContext } from "../../../context/products.context";
import ProductCard from "../../product-card/product-card.component";

const CategoriesPrevieww = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPrevieww;
