import React from "react";
import '../css/ingreso.css'

function Ingreso({nombre, pizza}) {
    return(
      <div className='contenedor-datos-personales'>        
        <div className='contenedor-texto'>
          <p>{nombre}, {pizza}</p>
        </div>
      </div>
    );
}

export default Ingreso; 