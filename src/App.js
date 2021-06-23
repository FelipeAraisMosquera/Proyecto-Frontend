//import {useState} from 'react';
//material ui
import { ThemeProvider } from '@material-ui/styles';
//import { Button } from '@material-ui/core';
import { theme } from './styles/themePalette';
/*import Button from "./components/button";*/
//components
import Login from './components/Login';


function App() {
 
	return(
		<>
	 <ThemeProvider theme={theme}>
     <Login/>
     
    </ThemeProvider>
		</>
	);

}

export default App;
/*
<Button style = {{textTransform: 'none'}} variant='outlined' color='primary'>Login</Button>

*/
/*
const [usuario,setUsuario] = useState({
  nombre: '',
  correo: ''
});

const {nombre, correo} = usuario; 

const actualizarUsuario = (e) =>{
setUsuario({
  ...usuario,
  [e.target.name]: e.target.value
})
}

const enviarDatos = (e) =>{
e.preventDefault();
alert(`Datos Enviados: Nombre: ${nombre} Correo: ${correo}`);

}
return(
  <>
  <form onSubmit={enviarDatos}>
  <input onChange={actualizarUsuario} name='nombre' value={nombre} type='text' placeholder = 'Nombre de usuario'/>
  <input onChange={actualizarUsuario} name='correo' value={correo} type='email' placeholder = 'Correo'/>
  <button type='submit'>Enviar datos</button>
  </form>
</>
);*/

//---------
/*
<div style={{
      marginRight: '5px'
    }}>
    <Button title = 'Like' />
    </div>
    <div style={{
      marginRight: '5px',
      marginLeft: '5px'
    }}>
    <Button title = 'Share' />
    </div>
    <div style={{
      marginRight: '5px',
      marginLeft: '5px'
    }}>
    <Button title = 'Options' />
    </div>*/

    /*<h1>{contador}</h1>
    <button onClick={()=> setContador(contador+1)}>
      Incrementar
    </button> */