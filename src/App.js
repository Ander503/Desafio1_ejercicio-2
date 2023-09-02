import { useState } from 'react';
import './App.css';
import Ingreso from './components/ingreso';

function App() {

  function HandleSubmit(e)
  {
    e.preveventDefault()
  }

  /*Nombre*/
  const [name, setName]=useState('');
  /*Tipo de pizza*/
  const [pizza, setPizza]=useState('');
  /*Ingredientes*/
  const [checkboxValues,setValues]=useState([]);

  function handleChange(event){
    const {value, checked}= event.target

    if(checked){
      setValues(pre=>[...pre,value])
    }
    else(
      setValues(pre=>{
        return [...pre.filter (skill => skill!==value)]
      })
    )
  }

  console.log(checkboxValues)

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
                  <option value='Pizza Personal'>Pizza Personal</option>
                  <option value='Pizza Mediana'>Pizza Mediana</option>
                  <option value='Pizza Grande'>Pizza Grande</option>
                </select>  


                <div className='ingredientes'>      
                  <div class="checkbox-container">
                    <input type="checkbox" name='1' value='Peperoni' onChange={handleChange} />
                    <label>Peperoni</label>
                  </div>

                  <div class="checkbox-container">
                    <input type="checkbox" name='2' value='Hongos' onChange={handleChange} />
                    <label>Hongos</label>
                  </div>

                  <div class="checkbox-container">
                    <input type="checkbox" name='3' value='Jamon' onChange={handleChange} />
                    <label>Jamon</label>
                  </div>

                  <div class="checkbox-container">
                    <input type="checkbox" name='4' value='Aceitunas' onChange={handleChange} />
                    <label>Aceitunas</label>
                  </div>

                  <div class="checkbox-container">
                    <input type="checkbox" name='5' value='Piña' onChange={handleChange} />
                    <label>Piña</label>
                  </div>                  
                </div>                
              </div>
            </div>                         
          </div>
        </form>
      
        
      <div className='columna-derecha'>
        <Ingreso
        nombre={name}
        pizza={pizza}
        array={checkboxValues}
        
        />
      </div>            
    </div>
  );
}

export default App;
