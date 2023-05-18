import { useForm } from "react-hook-form";

const Formulario = () => {
    return <div>
        <h2>RiCero</h2>
        <h3>Disminuye riesgos escolares</h3>
        <h4>Registrate con tu correo electronico</h4>
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
        <div>
            <label> Login </label>
            <input type="text" name="Login" />
        </div>
        <div>
            <label > Registrate con Facebook</label>
            <input type="text" name="Facebok" />
        </div>
        <div>
            <label > Registrate con Google</label>
            <input type="text" name="Google" />
        </div>
        </form>
    </div>
}

export default Formulario;