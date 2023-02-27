import React from 'react';

const Button = (props) => {
  const style1 = '';
  const style2 = '';

  return (
    <button
      className={`bg-slate-500 m-2 px-3 py-1 rounded-md text-center ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
