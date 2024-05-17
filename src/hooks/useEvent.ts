import { useState, useEffect } from "react";
import axios from "axios";
import { IEvent } from "../types";

export function useEvent(game: string, platform:string){
    const [events, setEvents] = useState<IEvent[]>()

    useEffect(()=>{
        if (game !== '' && platform !== ''){
            axios.get<IEvent[]>('http://localhost:8000/event')
            .then((response) => {
                let tempEvents = response.data
                tempEvents = tempEvents.filter((e :IEvent) => e.platform === platform && e.game.name === game)
                setEvents(tempEvents)
            })
            .catch((message) => console.log(message))
        }
    }, [game, platform])
        

    return {events}
}