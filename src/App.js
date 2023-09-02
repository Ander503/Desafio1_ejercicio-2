import './App.css';
import Ingreso from './components/ingreso';

function Select({pizza1, pizza2, pizza3}){
  return (
    
    <select className='Select'>
      <option disabled={true}>Elija Un tamaño de pizza</option>
      <option value={pizza1}>{pizza1}</option>
      <option value={pizza2}>{pizza2}</option>
      <option value={pizza3}>{pizza3}</option>
    </select>    
  );
}

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
  
  return (
    <div className='App'>
      <form onSubmit={HandleSubmit}>
        <h1 style={{textAlign:'center', }}>BIENVENIDO A LA ITALIANA</h1>        
        <div className='columna-izquierda'>
          <div className='contenedor-datos-personales'>
            <img 
              className='imagen-pizza'
              src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'                                   
            />
          
            <div className='contenedor-texto'>
              
              <input className='nom' type='text' name='nombre' placeholder='Ingrese Su Nombre' />
              <Select pizza1="Pizza Personal" pizza2="Pizza Mediana" pizza3="Pizza Grande" />            
              <Ingredientes ig1='Peperoni' ig2='Hongos' ig3='Jamon' ig4='Aceitunas'/>

            </div>

          </div>                         
        </div>
      </form>
        
      <div className='columna-derecha'>
        
      </div>
      
      
    </div>
  );
}

export default App;
