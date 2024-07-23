import React from "react";


const Button = ({children, ...props}) => {
  return (
    <>
      <button className="scale-110"{...props}>
      {children}
    </button>
    </>
  );
};
export default Button;