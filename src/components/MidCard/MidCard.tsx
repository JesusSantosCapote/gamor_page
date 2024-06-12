import { Box, Typography } from "@mui/material";
import backgroundViolet from '../../static/malcore_plus.png';
import backgroundOrange from '../../static/arachna_plus.png'
import { useTheme } from '@mui/material/styles';
import CountdownTimer from "../CountDownTimer/CountDownTimer";


interface IMidCardProps{
    date:number
}

export function MidCard({date}:IMidCardProps){
    const theme = useTheme()
    const background = theme.palette.mode === 'light' ? backgroundViolet : backgroundOrange

    return (
        <Box  sx={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', width:{lg:'33%', xs:'100%', md:'100%'}, minHeight:'500px'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', textAlign:'center', marginTop:'30px', color:'white'}}>Fortnite New Seasson</Typography>

            <CountdownTimer/>
        </Box>
    )
}