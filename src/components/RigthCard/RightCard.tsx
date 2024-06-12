import { Box,  Typography} from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SearchGame } from '../SearchGame';
import { useState } from 'react';
import { IGame } from '../../types';

interface IRightCardProps{
    games: IGame[]
}

export function RightCard({games}: IRightCardProps){
    const [alignment, setAlignment] = useState('party');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <Box sx={{width:{lg:'33%', xs:'100%', md:'100%'}}}>
            <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                <Typography variant='h5' sx={{color:'slategrey', fontWeight:'regular'}}>01.</Typography>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>Choose Platform</Typography>
            </Box>
            <Box sx={{padding:'5px 5px', backgroundColor:"background.default", width: '70%', borderRadius:'9999px', marginX:'auto', marginTop:'20px'}}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{width:'100%', marginX:'auto', border:'none'}}
                    >
                    <ToggleButton value="party" sx={{border:'none 1px', borderRadius:'9999px', width:'33%', fontWeight:'bold'}}>Party</ToggleButton>
                    <ToggleButton value="match" sx={{border:'none 1px', width:'34%', fontWeight:'bold'}}>Matchs</ToggleButton>
                    <ToggleButton value="streams" sx={{border:'none 1px', borderRadius:'9999px', width:'33%', fontWeight:'bold'}}>Streams</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px', marginBottom:'20px'}}>
                    <Typography variant='h5' sx={{color:'slategrey', fontWeight:'regular'}}>02.</Typography>
                    <Typography variant='h5' sx={{fontWeight:'bold'}}>Searching Games</Typography>
                </Box>
                <SearchGame games={games} platform={alignment}/>
            </Box>
        </Box>
    )
}