import React from 'react';

const ImageComponent = ({imgUrl, className}) => {
  return (
    <img
      src={imgUrl}
      alt=''
      className={`absolute top-0 left-0 z-10 ${className}`}
    />
  );
};

export default ImageComponent;
