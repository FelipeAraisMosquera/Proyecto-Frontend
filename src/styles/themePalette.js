import { createMuiTheme } from '@material-ui/core/styles';
//import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  palette: {
    primary: { 
      main:  '#0466c8'
    },
    secondary: { 
       main: '#3d405b'
  }
  
},
typography: {
    fontFamily: "'Ubuntu', 'sans-serif'"
}
});

export const primaryColor = theme.palette.primary.main;
export const secondaryColor = theme.palette.secondary.main;