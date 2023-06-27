import {Button} from './componentes/button/button.jsx';
import {Input} from './componentes/input/input.jsx';
import {Lista} from './componentes/Lista Desplegable/lista.jsx';
import {Planilla} from './componentes/Planilla Asistencia/planilla.jsx';
import './App.css';
function App(){
    return(

    <div className="App">
    <h1>Ricero</h1>
        <h2>Disminuye riesgos escolares</h21>
        <p>Registrate con tu correo electronico</p>

    <Input placeholder="Nombre Usuario" id="name" name="nombre" type="text"/>
    <Input placeholder="Correo electronico" id="correo" name="correo electronico" type="text"/>
    <Input placeholder="Contraseña" id="contraseña" name="contraseña" type="password"/>

    <Button text="Login" bgcolor="pink"/>
    </div>
    );
}
export default App;