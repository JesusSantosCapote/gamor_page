import { Box, Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import { useGames } from '../../hooks';
import { RightCard } from '../RigthCard';
import { LeftCard } from '../LeftCard';
import { MidCard } from '../MidCard';

export default function MainCard(){
    const {games} = useGames()

    //In a real project this must be fetch from backend
    const countdownDate = Date.now() + 1000000
    
    return (
        <Box sx={{marginLeft:'60px', marginRight:'60px', marginTop:'30px'}}>
            <Paper elevation={4} sx={{width:'100%', height:{xs:'100%', md:'100%', lg:'500px'}, backgroundColor:'background.secondary'}}>
                <Stack direction={{xs:'column',md:'column', lg:'row'}}>
                    <LeftCard />

                    <MidCard date={countdownDate}/>

                    <RightCard games={games} />
                    
                </Stack>
            </Paper>
        </Box>
    )
}