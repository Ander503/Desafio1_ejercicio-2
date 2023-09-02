import { useState } from 'react';
import './App.css';
import Ingreso from './components/ingreso';

/*function Select({pizza1, pizza2, pizza3}){
  return (
    
    <select className='Select'>
      <option disabled={true}>Elija Un tamaño de pizza</option>
      <option value='7'>{pizza1}</option>
      <option value='10'>{pizza2}</option>
      <option value='12'>{pizza3}</option>
    </select>    
  );
}*/

function Ingredientes({ig1,ig2,ig3,ig4}){
  return(
    <div className='ingredientes'>      
      <div class="checkbox-container">
        <input type="checkbox" name='1' value={ig1} />
        <label>{ig1}</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" name='2' value={ig2} />
        <label>{ig2}</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" name='3' value={ig3} />
        <label>{ig3}</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" name='4' value={ig4} />
        <label>{ig4}</label>
      </div>

      
    </div>
  );
}


function App() {

  function HandleSubmit(e)
  {
    e.preveventDefault()
  }

  /*Nombre*/
  const [name, setName]=useState('');
  /*Tipo de pizza*/
  const [pizza, setPizza]=useState('');
  /**/

  return (
    <div className='App'>      
        <h1 style={{textAlign:'center', }}>BIENVENIDO A LA ITALIANA</h1>  
        <form onSubmit={HandleSubmit}>      
          <div className='columna-izquierda'>
            <div className='datos-personales'>
              <img 
                className='imagen-pizza'
                src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'                                   
              />
            
              <div className='grupo-texto'>
                
                <input className='nom' type='text' name='nombre' placeholder='Ingrese Su Nombre' onChange={(e)=>setName(e.target.value)}/>
                <select className='Select' onChange={(e)=>setPizza(e.target.value)}> 
                  <option disabled={true}>Elija Un tamaño de pizza</option>
                  <option value='7'>Pizza Personal</option>
                  <option value='10'>Pizza Mediana</option>
                  <option value='12'>Pizza Grande</option>
                </select>  


                <Ingredientes ig1='Peperoni' ig2='Hongos' ig3='Jamon' ig4='Aceitunas'/>


                <button type='submit' className='btn_end'  > Terminar Compra </button>
              </div>

            </div>                         
          </div>
        </form>
      
        
      <div className='columna-derecha'>
        <Ingreso
        nombre={name}
        pizza={pizza}
        />
      </div>
      
      
    </div>
  );
}

export default App;


/* 
esto es de columna derecha

<div className='datos-personales'>            
          <h4 style={{marginTop:'-240px', position:'absolute'}}>Facturacion</h4>
                          
              <h2>{name}</h2>
              <h2>{pizza}</h2>

              <Ingreso></Ingreso>
            
        </div> 
*/
