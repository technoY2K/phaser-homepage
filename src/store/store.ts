import { configureStore, combineReducers } from "@reduxjs/toolkit";
import game from "./game";

const rootReducer = combineReducers({
    game: game.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
