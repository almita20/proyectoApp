import { useForm } from "react-hook-form";

const Formulario = () => {
    return <div>
        <h2>RiCero</h2>
        <h3>Disminuye riesgos escolares</h3>
        <form>
        <div>
            <label > Nombre de usuario</label>
            <input type="text" name="Nombre"/>
        </div>
        <div>
            <label >Correo electronico</label>
            <input type="text" name="Correo"/>
        </div>
        <div>
            <label>Contraseña </label>
            <input type="password" name="Contraseña" />
        </div>
        </form>
    </div>
}

export default Formulario;