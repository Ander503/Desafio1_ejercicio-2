import React, { useState } from "react";
import '../css/ingreso.css'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
/************/
/*Instalar npm install sweetalert2*/
/************/
function Ingreso({ nombre, pizza, array }) {

  const result = array.length;

  const [finalprice, setFinalprice]=useState(null);
  const [extra, setExtra]=useState('');
  const [regular, setRegular]=useState('');


  function proceso(){
    let preciofinal = 0;
    let ingredientesextra=0;
    let precio_regular=0;

    if (!nombre || nombre.trim() === "") {
      Swal.fire({
        title: '¡Error!',
        text: 'Por favor, ingresa tu nombre antes de comprar la pizza.',
        icon: 'error'
      });
    }else{
      if (pizza === "Pizza Personal") {
        if (array.length === 0) {
          preciofinal = 7;
        } else if (array.length === 1) {
          ingredientesextra= result*1;
          preciofinal = 7 + ingredientesextra;
  
        } else if (array.length === 2) {
          ingredientesextra=result*0.75;
          preciofinal = 7 + ingredientesextra;
  
        } else if (array.length === 3) {
          ingredientesextra=result*0.50;
          preciofinal = 7 + ingredientesextra;
  
        } else if (array.length >= 4) {
          ingredientesextra=result*0.25;
          preciofinal = 7 + ingredientesextra;
        }
  
        setRegular('7');
        setExtra(ingredientesextra)
        setFinalprice(preciofinal);
        
      } else if (pizza === "Pizza Mediana") {
          if (array.length === 0) {
            preciofinal = 10;
          } else if (array.length === 1) {
            ingredientesextra=result*2;
            preciofinal = 10 + ingredientesextra;
  
          } else if (array.length === 2) {
            ingredientesextra=result*1;
            preciofinal = 10 + ingredientesextra;
  
          } else if (array.length === 3) {
            ingredientesextra=result*0.75;
            preciofinal = 10 + ingredientesextra;
  
          } else if (array.length >= 4) {
            ingredientesextra=result*0.50;
            preciofinal = 10 + ingredientesextra;
          }
  
          
          setRegular('10');
          setExtra(ingredientesextra)
          setFinalprice(preciofinal);
        
      } else if (pizza === "Pizza Grande") {
        if (array.length === 0) {
          preciofinal = 12;
  
        } else if (array.length === 1) {
          ingredientesextra=result*2.50;
          preciofinal = 12 + ingredientesextra;
  
        } else if (array.length === 2) {
          ingredientesextra=result*2;
          preciofinal = 12 + ingredientesextra;
          
        } else if (array.length === 3) {
          ingredientesextra=result*1;
          preciofinal = 12 + ingredientesextra;
  
        } else if (array.length >= 4) {
          ingredientesextra=result*0.75;
          preciofinal = 12 + ingredientesextra;
  
        }
  
        setRegular('12');
        setExtra(ingredientesextra)
        setFinalprice(preciofinal);
      } 
      Swal.fire({
        title: 'Compra exitosa',
        text: `Gracias, ${nombre}! Tu pizza ha sido comprada.`,
        icon: 'success'
      });
    }
    }


    

  return (
    <div className='contenedor-datos-personales'>      
      <div className='contenedor-texto'>
        <table class="mi-tabla">
          <tr>
            <td colspan="2" class="titulo-centrado"><h4>Facturación</h4></td>
          </tr>
          <tr>
            <td class="titulo">Nombre</td>
            <td class="contenido">{nombre}</td>
          </tr>
          <tr>
            <td class="titulo">Tipo de pizza</td>
            <td class="contenido">{pizza}</td>
          </tr>
          <tr>
            <td class="titulo">Total ingredientes extra</td>
            <td class="contenido">{result}</td>
          </tr>
          <tr>
            <td class="titulo">Precio Regular</td>
            <td class="contenido">{regular}</td>
          </tr>
          <tr>
            <td class="titulo">Costo adicional de ingredientes</td>
            <td class="contenido">{extra}</td>
          </tr>
          <tr>
            <td class="titulo">Total a pagar</td>
            <td class="contenido">{finalprice}</td>
          </tr>
        </table>
        <button onClick={()=>proceso()} className="btn_comprar">Comprar Pizza</button>
      </div>
      
    </div>
    
  );
}

export default Ingreso;
