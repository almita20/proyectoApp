import React, { isValidElement, useState } from 'react';

const LoginForm = () => {
  const [userType, setUserType] = useState(''); //  almacena el tipo de usuario seleccionado

  const handleEmailLogin = () => {
    // logica para enlazar el registro con el correo y la contraseña escrita.
  };

  const handleGoogleLogin = () => {
    // lógica para iniciar sesión con Google.
  };

  const handleGitHubLogin = () => {
    if(isValidElement(email && password)){
      Route()
    }
    else{
      console.log("No se pudo");
    }
  };

  const handleUserTypeChange = (e) => {
    //  accion que Actualiza el estado con el tipo de usuario seleccionado
    setUserType(e.target.value);
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="userType">Selecciona tu tipo de usuario:</label>
          <select id="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="">-- Selecciona --</option>
            <option value="profesor">Profesor</option>
            <option value="preceptor">Preceptor</option>
            <option value="alumno">Alumno</option>
          </select>
        </div>
        <button onClick={handleEmailLogin}>Iniciar sesión con correo y contraseña</button>
      </form>
      <div>
        <button onClick={handleGoogleLogin}>Registrarte con Google</button>
        <button onClick={handleGitHubLogin}>Registrarte con GitHub</button>
      </div>
    </div>
  );
}

export default LoginForm;