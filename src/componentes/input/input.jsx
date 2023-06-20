export function input(props){
    return(
        <div classname="input">
        <form action="/procesar_formulario" method="post">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre de Usuario">
        <input type="email" id="email" name="email" placeholder="Correo electronico">
        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña"
        </form>
        </div>
    )
}