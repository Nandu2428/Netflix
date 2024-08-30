import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleButton: false
    },
    reducers: {
        clicked: (state) => {
            state.toggleButton = !state.toggleButton;
        }
    }

});
export const { clicked } = gptSlice.actions;
export default gptSlice.reducer;