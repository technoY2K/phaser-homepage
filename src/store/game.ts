import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "game",
    initialState: 0,
    reducers: {
        increment: (state) => (state += 1),
    },
});

const { increment } = slice.actions;

export { slice as default, increment };
