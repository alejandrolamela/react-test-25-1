import React from "react";

const PrimerComponente = (props) => {
  const cursos = ["html", "css", "js"];
  const {name} = props;
  const{lastName} = props;
  return (
    <div>
      <h1>primero</h1>
      <ul>
        {cursos.map((curso) => {
          return <li>{curso}</li>;
        })}
      </ul>
      <p>Me llamo {name} y mi apellido es {lastName}</p>
    </div>
  );
};

export default PrimerComponente;
