export function input(props){
    return(
        <div classname="input">
        <form action="/procesar_formulario" method="post">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre de Usuario">
        
        </form>
        </div>
    )
}