import React from 'react';
import './CategoryHeader.css';

const CategoryHeader = ({ title }) => {
    return (
      <div className="category-header">
          <h2>{title}</h2>
      </div>
    );
  };
  
  export default CategoryHeader;