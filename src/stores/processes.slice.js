import { createSlice } from '@reduxjs/toolkit';

export const processesSlice = createSlice({
    name: 'processes',
    initialState: {
        explorer: false,
        chrome: false,
        spotify: false,
    },
    reducers: {
        startProcess: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state[action.payload] = true;
        },
        stopProcess: (state, action) => {
            state[action.payload] = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startProcess, stopProcess } = processesSlice.actions;

export default processesSlice.reducer;
