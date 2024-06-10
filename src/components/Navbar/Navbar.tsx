import Box from '@mui/material/Box';
import { Link, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


interface INavbarProps{
    handleMode: CallableFunction
}

const pages = ['Home', 'Streams', 'Party', 'Premium']

export default function Navbar({handleMode}:INavbarProps){
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const theme = useTheme()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <Box sx={{display:{md:'none', lg:'flex', xs:'none'}, marginTop:'60px', alignItems:'center', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', marginLeft:'60px', width:"30%"}}>
                    {pages.map((name) => (<Link href="#" sx={{color: 'text.secondary', fontSize:'20px', fontWeight:'bold', ":hover":{color:'link'}}} underline="none">{name}</Link>))}
                </Box>
                <Box sx={{width:'60%', textAlign:'center'}}>
                    <Typography variant='h4' sx={{ fontWeight:'bold', fontFamily:"monospace", color:'text.primary'}}>GAMOR</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginRight: '60px', alignItems:'center', width:'30%'}}>
                    <IconButton sx={{}} onClick={() => handleMode()} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                        <Link href="#" underline="none" sx={{color:'text.primary', fontSize:'20px', fontWeight:'bold', ":hover":{color:"text.main"}}}>Sign In</Link>
                        <Button sx={{borderRadius:'9999px', backgroundColor:'primary.dark', color:'white', height:'50px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                                    '&:hover': {
                                    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
                                    backgroundColor:'hover'
                                    },}}>
                                        Create Account
                        </Button>
                </Box>
            </Box>

            <Box sx={{display:{md:'flex', lg:'none', xs:'flex'}, flexGrow:1, alignItems:'center', justifyContent:'space-between', marginTop:'60px'}}>
                <Box sx={{marginLeft:'60px'}}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{color:'text.secondary', ":hover":{color:'hover'}}}>{page}</Typography>
                    </MenuItem>
                ))}
                <MenuItem key="signin" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{color:'text.secondary', ":hover":{color:'hover'}}}>Sign In</Typography>
                </MenuItem>

                <MenuItem key="signin" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{color:'text.secondary', ":hover":{color:'hover'}}}>Create Account</Typography>
                </MenuItem>
                </Menu>
            </Box>
                <Typography variant='h4' sx={{fontWeight:'bold', fontFamily:'monospace', color:'text.primary'}}>GAMOR</Typography>
                
                <IconButton sx={{marginRight:'60px'}} onClick={() => handleMode()} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Box>
    )
}


