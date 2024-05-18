import { useState, useEffect } from "react";
import axios from "axios";
import { IGame } from "../types";

export function useGames(){
    const [games, setGames] = useState<IGame[]>([])
    
    useEffect(() => {
        axios.get<IGame[]>('http://localhost:8000/game')
        .then((response) => {
            setGames(response.data)
        })
        .catch((message) => console.log(message))
    })

    return {games}
}