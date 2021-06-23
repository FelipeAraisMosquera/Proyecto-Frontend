import { createMuiTheme } from '@material-ui/core/styles';
//import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  palette: {
    primary: { 
      main:  '#fb8500'
    },
    secondary: { 
       main: '#d62828'
  }
  
},
typography: {
    fontFamily: "'Ubuntu', 'sans-serif'"
}
});

export const primaryColor = theme.palette.primary.main;
export const secondaryColor = theme.palette.secondary.main;