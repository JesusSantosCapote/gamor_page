import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const pages = ['Home', 'Streams', 'Party', 'Premium']

export default function Navbar(){
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <Box sx={{display:{xs:'none', md:'flex'}, flexGrow:1, marginTop:'60px', alignItems:'center'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', marginLeft:'60px', width: '30%'}}>
                    {pages.map((name) => (<Link href="#" sx={{color:'darkviolet', fontSize:'20px', fontWeight:'bold'}} underline="none">{name}</Link>))}
                </Box>
                <Typography variant='h4' sx={{display:'flex', justifyContent:'center', width:'50%', marginRight:'110px', fontWeight:'bold'}}>GAMOR</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between', width:'20%', marginRight: '60px', alignItems:'center'}}>
                    <Link href="#" underline="none" sx={{color:'black', fontSize:'20px', fontWeight:'bold', ":hover":{color:'darkorange'}}}>Sign In</Link>
                    <Button sx={{borderRadius:'9999px', backgroundColor:'black', color:'white', height:'50px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                                '&:hover': {
                                boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
                                backgroundColor:'darkorange'
                                },}}>
                                    Create Account
                    </Button>
                </Box>
            </Box>

            <Box sx={{display:{xs:'flex', md:'none'}, flexGrow:1, marginTop:'60px'}}>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    <Typography textAlign="center" sx={{color:'darkviolet'}}>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
                
                <Box sx={{display:'flex', justifyContent:'center', width:'60%'}}><strong>GAMOR</strong></Box>
                <Box sx={{display:'flex', justifyContent:'space-between', width:'20%', marginRight: '60px'}}>
                    <Link href="#" underline="none" sx={{color:'black'}}>Sign In</Link>
                    <Button sx={{borderRadius:'9999px', backgroundColor:'black', color:'white'}}>Contained</Button>
                </Box>
            </Box>
        </Box>
    )
}


