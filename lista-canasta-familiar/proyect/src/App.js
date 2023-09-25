import icon from './assets/mas.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaActual, setTareaActual] = useState('');
  const [indiceEditando, setIndiceEditando] = useState(null);

  const handleInputChange = (event) => {
    setTareaActual(event.target.value);
  };

  const agregarTarea = () => {
    if (indiceEditando !== null) {
      const nuevasTareas = [...tareas];
      nuevasTareas[indiceEditando] = tareaActual;
      setTareas(nuevasTareas);
      setTareaActual('');
      setIndiceEditando(null);
    } else {
      if (tareaActual.trim() !== '') {
        setTareas([...tareas, tareaActual]);
        setTareaActual('');
      }
    }
  };

  const editarTarea = (index) => {
    setIndiceEditando(index);
    setTareaActual(tareas[index]);
  };

  const guardarEdicion = () => {
    const nuevasTareas = [...tareas];
    nuevasTareas[indiceEditando] = tareaActual;
    setTareas(nuevasTareas);
    setTareaActual('');
    setIndiceEditando(null);
  };

  const borrarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const botonAgregar = (
    <button type="button" onClick={agregarTarea}>
      {indiceEditando !== null ? 'Guardar' : 'Agregar'} <img src={icon} />
    </button>
  );

  return (
    <div className="App">
      <div className="App-top">
        <header className="App-header">
          <h1>Canasta Familiar</h1>
          <div className="agregar">
          <input
            type="text"
            placeholder="Agregar Producto"
            value={tareaActual}
            onChange={handleInputChange}
          />
          <button type="button" onClick={agregarTarea}>
              {indiceEditando !== null ? 'Guardar' : 'Agregar'} <img src={icon} />
          </button>
          </div>
        </header>
      </div>
      <div className="App-bottom">
        <main className="App-main">
          <div className="tareas">
            <div className="list-tareas">
              <h1>Productos Agregados</h1>
              <ul>
                {tareas.map((tarea, index) => (
                  <li key={index}>
                    <div className='elemento'>
                      {index === indiceEditando ? (
                        <div className="overlay">
                          <div className="modal">
                            <input
                              type="text"
                              value={tareaActual}
                              onChange={handleInputChange}
                            />
                            <button onClick={guardarEdicion}>Guardar</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          {tarea}
                          <div>
                            <button onClick={() => editarTarea(index)} id='editar'>Editar</button>
                            <button onClick={() => borrarTarea(index)} id='borrar'>Borrar</button>
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;