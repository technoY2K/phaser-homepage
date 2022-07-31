export enum GameEvent {
    Message = "ping",
}

export enum GameMessageType {
    Ready = "ready",
    StateChange = "state",
}

export type GameMessage = {
    type: GameMessageType;
    payload?: { value: number };
};
