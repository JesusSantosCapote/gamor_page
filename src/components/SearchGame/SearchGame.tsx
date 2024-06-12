import { IGame } from "../../types";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEvent } from "../../hooks";
import Avatar from '@mui/material/Avatar';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Box, FormControl, IconButton, Typography } from "@mui/material";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';


interface ISearchGameProps{
    games: IGame[],
    platform: string
}

export function SearchGame({games, platform}: ISearchGameProps){
    const [game, setGame] = useState('');
    const {events} = useEvent(game, platform)



    const handleChange = (event: SelectChangeEvent) => {
        setGame(event.target.value);
    };

    return (
        <Box sx={{marginX: 'auto', width: '60%'}}>
            <Box sx={{backgroundColor:'background.default', width:'100%', height:'250px', padding:'5px', borderRadius:'10px'}}>
            <FormControl variant="standard" sx={{width:'100%', backgroundColor:'background.default', ":focus":{outlineColor:'black'}}}>
                <Select
                labelId="demo-simple-select-filled-label"
                IconComponent={TuneRoundedIcon}
                MenuProps={{PaperProps: {sx: {zIndex:3, backgroundColor:'background.secondary'}}}}
                value={game}
                id="demo-simple-select-filled"
                onChange={handleChange}
                sx={{width: '100%', borderBottom:'none', padding:'5px', fontSize:"20px", fontWeight:'bold', ":focus":{outlineColor:'black'},zIndex:2}}
                >
                {games.map((g) => <MenuItem sx={{zIndex:2}} value={g.name}>{g.name}</MenuItem>)}
                </Select>
            </FormControl>
                <List sx={{zIndex:1,}}>
                    {events?.map((e, index) => 
                    <ListItem sx={{":hover":{backgroundColor:'background.secondary', zIndex:1}}}>
                        <Box sx={{display:'flex', justifyContent:"space-between", alignItems:"center", width:'100%'}}>
                            <Box sx={{borderRadius:'999px',marginRight:'5px', width:'23px', backgroundColor:'background.secondary'}} ><Typography sx={{textAlign:'center', fontWeight:'bold'}}>{index + 1}</Typography></Box>
                            <Typography sx={{fontWeight:'bold'}}>{e.name}</Typography>
                            <Box sx={{display:"flex", marginLeft:"10px", flexWrap:'wrap'}}>
                                {e.users.map((u) => <Avatar sx={{width:20, height:20, backgroundColor:'text.main'}}>{u.name.charAt(0)}</Avatar>)}
                            </Box>
                            <IconButton aria-label="add-box" sx={{justifyContent:'flex-end'}}>
                                <AddBoxRoundedIcon />
                            </IconButton>
                        </Box>
                    </ListItem>)}
                </List>

            </Box>
        </Box>
    )
}