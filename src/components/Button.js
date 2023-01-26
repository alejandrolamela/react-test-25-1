import React, { useState } from "react";

const Button = () => {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    return setNumero(numero + 1);
  };
  return (
    <div>
      {numero}
      <button onClick={sumar}>Click</button>
    </div>
  );
};

export default Button;
