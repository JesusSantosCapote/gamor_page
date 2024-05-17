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
            <Box sx={{display:{xs:'none', md:'flex'}, flexGrow:1, marginTop:'60px'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', marginLeft:'60px', width: '20%'}}>
                    {pages.map((name) => (<Link href="#" sx={{color:'darkviolet'}} underline="none">{name}</Link>))}
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', width:'60%'}}><strong>GAMOR</strong></Box>
                <Box sx={{display:'flex', justifyContent:'space-between', width:'20%', marginRight: '60px'}}>
                    <Link href="#" underline="none" sx={{color:'black'}}>Sign In</Link>
                    <Button sx={{borderRadius:'9999px', backgroundColor:'black', color:'white'}}>Contained</Button>
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


