import { createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const verdeAcqua = "#01CE8C"


export default createMuiTheme({
  palette: {
      common: {
        verde: `${verdeAcqua}`
      },
     
    primary: {
      main: purple[500],
    },
    secondary: {
      main: `${verdeAcqua}`,
    },
  },
});

