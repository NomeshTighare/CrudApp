import { Box , makeStyles , Typography } from '@material-ui/core';
import welcome from '../Assets/images/welcome.jpg'; 


const CrudApp = () =>{
  
return(
   
    <Box>
        <img src={welcome} style={{width:'100%', height: '300px',}}/>
    </Box>
)
}
export default CrudApp;