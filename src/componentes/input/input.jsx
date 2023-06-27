export function Input(props){
    return(
        <div classname="input">
        <input classname="registro" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}>
        </div>
    )
}