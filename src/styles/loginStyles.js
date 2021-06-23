import { makeStyles } from '@material-ui/core/styles';
//import { primaryColor } from './themePalette';

export const loginStyles = makeStyles((theme) => ({
root:{ 
    paddingTop: '100px'
},
Paper:{ 
  borderRadius: '20px',
  height: '350px'
},
mainContainer: {
  padding: theme.spacing(4,4,4,4)//arriba, derecha, abajo, izquierda
},
title:{ 
  textAlign: 'center'
},
inputContainer:{
  padding: theme.spacing(4,0,4,0)//arriba, derecha, abajo, izquierda
},
button:{
  textTransform: 'none',
},
paddingButton:{
  padding: theme.spacing(0,0,0,0),//arriba, derecha, abajo, izquierda
}

}));