import { PayloadAction } from "@reduxjs/toolkit";

export enum GameEvent {
    Message = "ping",
    ChestLooted = "looted",
}

export enum GameEventType {
    Ready = "ready",
    StateChange = "state",
}

export type GamePayload<T = undefined> = {
    type: GameEventType;
    updateState?: () => PayloadAction<T>;
};
