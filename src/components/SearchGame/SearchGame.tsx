import { IGame } from "../../types";
import { Box, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { IEvent } from "../../types";
import { useEvent } from "../../hooks";
import Avatar from '@mui/material/Avatar';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

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
            <DemoPaper>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={game}
                    onChange={handleChange}
                    sx={{width: '100%', border:'solid 0px'}}
                    >
                    {games.map((g) => <MenuItem value={g.name}>{g.name}</MenuItem>)}
                </Select>

                <List>
                    {events?.map((e) => 
                    <ListItem>
                        <Box sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                            <ListItemText>{e.name}</ListItemText>
                            <Box sx={{display:"flex", marginLeft:"10px"}}>
                                {e.users.map((u) => <Avatar sx={{width:20, height:20}}>{u.name.charAt(0)}</Avatar>)}
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