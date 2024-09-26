import React from 'react'

const Button = ({type,text,className}) => {
  return (
    <div
      className={`${type == "primary" && "primary_button p-0.5"}  ${
        type == "secondary" && "secondary_button"
      } ${className}
       flex items-center justify-center text-center `}
    >
      <div
        className={`${type == "primary" && "primary_grad p-0.5"}  ${
          type == "secondary" && "secondary_grad"
        
        } ${className} flex items-center justify-center flex-1 h-full `}
      >
        {text}
      </div>
    </div>
  );
}

export default Button