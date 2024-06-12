import { Box, Button, Link, Typography} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';


export function LeftCard(){
    const theme = useTheme()

    const decorationColor = theme.palette.mode === 'light' ? deepOrange[500] : deepPurple[500]

    return(
        <Box  sx={{height:'500px', textAlign:'left', width:{lg:'33%', xs:'100%', md:'100%'}}}>
                        <Box sx={{marginLeft:'30px', marginTop:'80px', display:{md:'none', sm:'block', lg:'block'}}}>
                        <Typography variant='h3'>start</Typography>
                        <Typography variant='h3' sx={{color:'text.main'}}>streaming</Typography>
                        <Typography variant='h3'>games</Typography>
                        <Typography variant='h3'>differently</Typography>
                        </Box>
                        <Typography variant='h2' sx={{display:{xs:'none',md:'block', lg:'none', textAlign:'center', marginTop:'80px'}}}>start <Box component='span' sx={{color:'text.main'}}>streaming</Box> games differently</Typography>
                        
                        <Typography sx={{marginLeft: '30px', marginTop:'20px', textAlign:{md:'center', lg:'left', xs:'left'}}}>
                            gamor now has <Box component='span' sx={{fontWeight:'bold', borderBottom:'solid 5px ' + decorationColor}}>stream party</Box> platform
                        </Typography>

                        <Box sx={{display:'flex', justifyContent:'space-evenly', marginTop:'50px', alignItems:'center'}}>
                            <Button sx={{borderRadius:'9999px', backgroundColor:'button', padding:'15px', color:'text.primary', height:'50px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                                        '&:hover': {
                                        boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
                                        backgroundColor:'hover'
                                        },}}>
                                            <Typography sx={{fontWeight:'bold', textAlign:'center', fontSize:'12px'}}>Create Account</Typography>
                            </Button>
                            <Link href="#" underline="none" sx={{color:'text.primary', fontWeight:'bold', fontSize:'20px', marginRight:'60px', ":hover":{color:'text.main'}}}>Sign In</Link>
                        </Box>
                    </Box>
    )
}