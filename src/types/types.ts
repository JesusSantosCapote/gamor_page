export interface IGame{
    name: string
}

export interface IGameList{
    games: IGame[]
}

export interface IUser{
    name: string
}

export interface IEvent{
    platform: string,
    game: IGame,
    name: string
    users: IUser[]
}