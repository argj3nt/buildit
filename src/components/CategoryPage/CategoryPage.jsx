// CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';

const CategoryPage = () => {
  const { categoryName } = useParams();
  return <Products category={categoryName} />;
};

export default CategoryPage;
