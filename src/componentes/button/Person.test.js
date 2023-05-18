import "./App.css";

function Person (props) {
    console.log(props);
    return(
      <div className="Person">
        <h3>Nombre: {props.nombre}</h3>
       <p>Edad: {props.edad}</p> 
      </div>
    )
    }