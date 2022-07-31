export enum GameEvent {
    Message = "ping",
    ChestLooted = "looted",
}

export enum GameEventType {
    Ready = "ready",
    StateChange = "state",
}

export type GamePayload = {
    type: GameEventType;
    data?: number;
};
