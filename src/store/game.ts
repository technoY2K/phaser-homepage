import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "game",
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
});

const { increment } = slice.actions;

export { slice as default, increment };
