import './App.css';
import freecodecamplogo from './imagenes/FreeCodeCamp_logo.png'
import Tarea from './componentes/Tareas';
function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodecamplogo} className="freecodecamp-logo" alt='Logo Freecodecamp' />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
      
    </div>
  );
}

export default App;
