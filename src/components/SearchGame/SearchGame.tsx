import { IGame } from "../../types";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEvent } from "../../hooks";
import Avatar from '@mui/material/Avatar';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Box, FormControl, IconButton, Typography } from "@mui/material";

interface ISearchGameProps{
    games: IGame[],
    platform: string
}

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: '250px',
    ...theme.typography.body2,
    textAlign: 'center',
  }));

export function SearchGame({games, platform}: ISearchGameProps){
    const [game, setGame] = useState('');
    const {events} = useEvent(game, platform)



    const handleChange = (event: SelectChangeEvent) => {
        setGame(event.target.value);
    };

    return (
        <Box sx={{marginX: 'auto', width: '60%'}}>
            <DemoPaper elevation={3}>
            <FormControl variant="standard" sx={{width:'100%', backgroundColor:'white', ":focus":{outlineColor:'black'}}}>
                <Select
                labelId="demo-simple-select-filled-label"
                value={game}
                id="demo-simple-select-filled"
                onChange={handleChange}
                sx={{width: '100%', border:'none', fontSize:"20px", fontWeight:'bold', ":focus":{outlineColor:'black'}}}
                >
                {games.map((g) => <MenuItem value={g.name}>{g.name}</MenuItem>)}
                </Select>
            </FormControl>
                <List>
                    {events?.map((e) => 
                    <ListItem sx={{":hover":{backgroundColor:'whitesmoke'}}}>
                        <Box sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                            <Typography sx={{fontWeight:'bold'}}>{e.name}</Typography>
                            <Box sx={{display:"flex", marginLeft:"10px"}}>
                                {e.users.map((u) => <Avatar sx={{width:20, height:20, backgroundColor:'darkorange'}}>{u.name.charAt(0)}</Avatar>)}
                            </Box>
                            <IconButton aria-label="add-box" sx={{}}>
                                <AddBoxRoundedIcon />
                            </IconButton>
                        </Box>
                    </ListItem>)}
                </List>

            </DemoPaper>
        </Box>
    )
}