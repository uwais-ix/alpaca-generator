import React from 'react';

const Button = (props) => {
  // option buttons style
  const optionStyle = '';

  // action button sytle
  const actionStyle = props.actionButton ? 'mr-4' : '';

  const selectedStyle = props.selected ? 'bg-blue-100' : '';

  return (
    <button
      className={`text-blue-800 border-blue-600 border-2 hover:scale-105 hover:shadow-sm hover:text-slate-800 m-2 px-3 py-1 rounded-md text-center capitalize font-sans active:bg-blue-400 duration-150 ${selectedStyle} ${actionStyle} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
