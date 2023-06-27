export function Input(props){
    return(
        <div classname="input">
        <input classname="registro" type="text" id="nombre" name="nombre" placeholder={props.placeholder}>
        </div>
    )
}