import React, { useState } from "react";

const INITIAL_STATE = {
  nombre: "",
  importe: "",
};
const Form = (props) => {
  const [search, setSearch] = useState(INITIAL_STATE);

  const submit = (event) => {
    //Este if sirve para cuando pongo el mismo dato se resetee

    if(!search.nombre || !search.importe) return;
    //El event preventdefault sirve para evitar el procesamiento automatico de los datos
    event.preventDefault();
    // console.log(search.nombre + search.importe);
    props.addSpentToList(search);
    //Esta funcion resetea para que si le das muchas veces al boton no se guarde 
    setSearch(INITIAL_STATE);
   
  };

  const handleInputChange = (event) => {
    //Con este console.log lo que hago es ver como funciona esta funcion, que lo que hace
    //es poner por consola los valores qu yo escribo en los input en directo
    console.log(event.target.value);
    setSearch({
      //no se muy bien para que sirve el ...search
      ...search,
      [event.target.name]: event.target.value,
    });

    //Creamos una funcion para enviar el formulario
  };
  
  return (
    <div>
      <form onSubmit={submit}>
        <label>
          <p>Nombre</p>
          <input type="text" name="nombre" onChange={handleInputChange} />
        </label>
        <label>
          <p>Importe</p>
          <input type="number" name="importe" onChange={handleInputChange} />
        </label>
        <button type="submit">Crear Gasto</button>
      </form>
    </div>
  );
};

export default Form;

//! PRIMER PASO: CREAMOS NUESTRO FORMULARIO
// import React from "react";

// const Form = () => {

//   return (
//     <div>
//       <form>
//         <label>
//           <p>Nombre</p>
//           <input type="text" name="nombre" />
//         </label>
//         <label>
//             <p>Importe</p>
//             <input type="number" name="importe"/>
//         </label>
//         <button type="submit">
//             Crear Gasto
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

//! 2.Creamos la funcion que va escuchar los input
// import React, { useState } from "react";

// const INITIAL_STATE = {
//   nombre: "",
//   importe: "",
// };
// const Form = () => {
//   const [search, setSearch] = useState(INITIAL_STATE);

//   const handleInputChange = (event) => {
//     //Con este console.log lo que hago es ver como funciona esta funcion, que lo que hace
//     //es poner por consola los valores qu yo escribo en los input en directo
//     console.log(event.target.value);
//     setSearch({
//         //no se muy bien para que sirve el ...search
//       ...search,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <div>
//       <form>
//         <label>
//           <p>Nombre</p>
//           <input type="text" name="nombre" onChange={handleInputChange} />
//         </label>
//         <label>
//           <p>Importe</p>
//           <input type="number" name="importe" onChange={handleInputChange} />
//         </label>
//         <button type="submit">Crear Gasto</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
