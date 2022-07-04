// import SHOP_DATA from "../../../shop-data.json";

import { Route, Routes } from "react-router-dom";

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";
// import { ProductsContext } from "../../../context/products.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.styles.scss";
import CategoriesPrevieww from "../categories-preview/categories-preview.component";
import Category from "../category/category.route.component";
// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}
//       <div className="products-container">
//         {/*   {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//    ))} */}
//       </div>
//     </div>
//   );
// };

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPrevieww />} />
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
