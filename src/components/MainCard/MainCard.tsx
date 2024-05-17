import { Box } from '@mui/material';
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
                    <Grid item xs={4} sx={{backgroundColor:"aliceblue", height:'500px', textAlign:'left'}}>
                        <Box sx={{marginLeft:'30px', marginTop:'100px'}}>
                        <h2>start</h2>
                        <h2>streaming</h2>
                        <h2>games</h2>
                        <h2>differently</h2>
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