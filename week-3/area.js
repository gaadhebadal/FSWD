const help = () => {
    console.log('This module contains the following functions:\n1. For calculating the area of a triangle (height and base length)\n2. For calculating Square Area\n3. For calculating Rectangle Area');
  };
  
  const rectangleArea = (ht, brth) => ht * brth;
  
  const squareArea = (side) => side * side;
  
  const triangleArea = (ht, base) => ht * base * 0.5;
  
  module.exports = {
    help,
    rectangleArea,
    squareArea,
    triangleArea,
  };
  