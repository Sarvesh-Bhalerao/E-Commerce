import "./category.styles.scss";

import { CategoriesContext } from "../../../context/categories.context";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";

//useparams render from nested route path
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="cat-title">{category.toUpperCase()}</h2>
      <div className="ctegory-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
