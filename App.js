import {Button} from './componentes/button/button.jsx';
import {Input} from './componentes/input/input.jsx';
import {Lista} from './componentes/Lista Desplegable/lista.jsx';
import {Planilla} from './componentes/Planilla Asistencia/planilla.jsx';
import './App.css';
function App(){
    return(

    <div className="App">
    <Input placeholder="Nombre Usuario"/>
    <Input placeholder="Correo electronico"/>
    <Input placeholder="Contraseña"/>

    </div>
    );
}
export default App;