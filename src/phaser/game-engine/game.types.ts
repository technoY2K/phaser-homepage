import { PayloadAction } from "@reduxjs/toolkit";

export enum GameEvent {
    MainSystem = "ping",
    ChestLooted = "looted",
}

export enum EventMessage {
    Ready = "ready",
    StateChange = "state",
}

export type GamePayload<T = undefined> = {
    message: EventMessage;
    updateState?: () => PayloadAction<T>;
};
