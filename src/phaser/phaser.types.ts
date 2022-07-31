export enum GameEvent {
    Message = "ping",
    ChestLooted = "looted",
}

export enum GameMessageType {
    Ready = "ready",
    StateChange = "state",
}

export type GameMessage = {
    type: GameMessageType;
    payload?: { value: number };
};
