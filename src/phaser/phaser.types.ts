export enum GameState {
    Ready = "READY",
}

export type GameMessage = {
    type: string;
    payload: { [key: string]: string };
};
