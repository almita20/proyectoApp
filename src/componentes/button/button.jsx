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
<button onClick={handcliclk}>Google</button>
<button onClick={handclick}>Hithub</button>
</body>
</html>