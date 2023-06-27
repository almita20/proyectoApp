import {Button} from './componentes/button/button.jsx';
import {Input} from './componentes/input/input.jsx';
import {Lista} from './componentes/Lista Desplegable/lista.jsx';
import {Planilla} from './componentes/Planilla Asistencia/planilla.jsx';
import './App.css';
function App(){
    return(
    <h1>Ricero</h1>
    <h2>Disminuye riesgos escolares</h21>
    <p>Registrate con tu correo electronico</p>
    
    <div className="App">
    <Input placeholder="Nombre Usuario" id="name" name="nombre" type="text"/>
    <Input placeholder="Correo electronico" id="correo" name="correo electronico" type="text"/>
    <Input placeholder="Contraseña" id="contraseña" name="contraseña" type="password"/>
    </div>
    );
}
export default App;