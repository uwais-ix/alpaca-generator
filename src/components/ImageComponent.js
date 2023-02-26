import React from 'react';

const ImageComponent = ({imgUrl, className}) => {
  return (
    <img
      src={imgUrl}
      alt=''
      className={`absolute z-10 ${className}`}
    />
  );
};

export default ImageComponent;
