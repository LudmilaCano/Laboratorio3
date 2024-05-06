import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const handleChange = (event) => {
      setUsername(event.target.value);
      if (event.target.value.toLowerCase().includes('o')){
        alert('Por favor, ¡Nombres de usuario sin la letra o!')
      }
    };
    const handleSubmit = () => {
      if (username.toLowerCase().includes('o') || username === '') {
        alert('Usuario inválido para registrarse');
      } else {
        alert('¡Usuario registrado correctamente!');
      }
    };

    return (
      <div>
        <div className="input-group mb-3">
          <input 
            value={username} 
            type="text"
            className="form-control"
            placeholder="Username..."
            aria-label="Username"
            aria-describedby="button-addon2"
            onChange={handleChange}/>
          <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Registrarse</button>
        </div>
          <p>{username}</p>
      </div>
  );
};
    
export default Login;