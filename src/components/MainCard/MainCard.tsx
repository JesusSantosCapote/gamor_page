import { Box, Button, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import background from '../../static/malcore.jpg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { DemoPaper } from '../DemoPaper';
import { SearchGame } from '../SearchGame';




export default function MainCard(){

    const [alignment, setAlignment] = useState('party');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    
    return (
        <Box sx={{marginLeft:'60px', marginRight:'60px'}}>
            <DemoPaper variant='elevation' elevation={4}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={4} sx={{height:'500px', textAlign:'left'}}>
                        <Box sx={{marginLeft:'30px', marginTop:'80px'}}>
                        <Typography variant='h3'>start</Typography>
                        <Typography variant='h3' sx={{color:'darkorange'}}>streaming</Typography>
                        <Typography variant='h3'>games</Typography>
                        <Typography variant='h3'>differently</Typography>
                        </Box>
                        <Typography sx={{marginLeft: '30px', marginTop:'20px'}}>
                            gamor now has <strong>stream party</strong> platform
                        </Typography>
                        <Box sx={{display:'flex', justifyContent:'space-evenly', marginTop:'50px', alignItems:'center'}}>
                            <Button sx={{borderRadius:'9999px', backgroundColor:'white', color:'black', height:'50px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                                '&:hover': {
                                boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
                                },}}>
                                    Create Account
                            </Button>
                            <Link href="#" underline="none" sx={{color:'black', fontSize:'20px', marginRight:'60px', ":hover":{color:'darkorange'}}}>Sign In</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>

                    </Grid>
                    <Grid item xs={4}>
                        <h2>01. Choose Platform</h2>
                        <Box sx={{padding:'5px 5px', backgroundColor:"aquamarine", width: '70%', borderRadius:'9999px', marginX:'auto'}}>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                sx={{width:'100%', marginX:'auto'}}
                                >
                                <ToggleButton value="party" sx={{border:'solid 1px', borderRadius:'9999px', width:'33%'}}>Party</ToggleButton>
                                <ToggleButton value="match" sx={{border:'solid 1px', width:'34%'}}>Matchs</ToggleButton>
                                <ToggleButton value="streams" sx={{border:'solid 1px', borderRadius:'9999px', width:'33%'}}>Streams</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                        <h2>02. Searching Game</h2>
                        <SearchGame games={[{name: 'Call of Duty'}]} platform={alignment}/>
                    </Grid>
                </Grid>
            </Box>
            </DemoPaper>
        </Box>
    )
}