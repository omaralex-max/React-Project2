// DynamicStar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStarOfLife } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const DynamicStar = ({ rating }) => {
  let icon;
  let color;

  if (rating >= 4.5) {
    icon = faStar;
    color = 'gold'; // Full star
  } else if (rating >= 2.5) {
    icon = faStarHalfAlt; // Half star
    color = 'orange';
  } else {
    icon = faStarOfLife; // Empty star or a different icon
    color = 'gray';
  }

  return (
    <FontAwesomeIcon 
      icon={icon} 
      style={{ color: color, marginRight: '5px' }} 
    />
  );
};

export default DynamicStar;
