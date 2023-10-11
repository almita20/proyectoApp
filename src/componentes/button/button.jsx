//import React from 'react';

export function Button(props) {
  return (
    <div className="button">
      <button style={
        {
          backroundColor: props.bgcolor,
        }
      }>
        {props.text}
      </button>
    </div>
  )
}
<html>
  <body>
  <button  onClick={handcliclk} id="github-login-button">Iniciar sesión con GitHub</button>

<button onClick={handcliclk}>Google</button>
<button onClick={handclick}>Github</button>
</body>
</html>