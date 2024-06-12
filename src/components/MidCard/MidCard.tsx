import { Box } from "@mui/material";
import backgroundViolet from '../../static/malcore.jpg';
import backgroundOrange from '../../static/arachne.jpg'
import { useTheme } from '@mui/material/styles';

export function MidCard(){
    const theme = useTheme()
    const background = theme.palette.mode === 'light' ? backgroundViolet : backgroundOrange

    return (
        <Box  sx={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', width:{lg:'33%', xs:'100%', md:'100%'}, minHeight:'500px'}}>
        </Box>
    )
}