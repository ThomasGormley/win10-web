import { createSlice } from '@reduxjs/toolkit';
import { taskbarConfig } from '../data/taskbar/taskbar.config';

// taskbar.store  (holds pinnned (default) programs & any extra open processes)
// -> initialValue: [taskbarConfig.programs]
//
//
// toggleProcess(id) [ON] -> if p.ID not in taskbar state,
//                              -> append taskbar state & set process to true
//                          else
//                              -> set process true
//
// toggleProcess(id) [OFF] -> if p.ID is not in taskbarConfig.programs (source of truth for pinned programs)
//                              -> remove from taskbar.store
//                          else
//                              -> set process false

export const taskbarSlice = createSlice({
    name: 'taskbar',
    initialState: [...taskbarConfig.programs],
    reducers: {
        addProgramToTaskbar: (state, action) => {
            console.log(`action.payload`, action.payload);
            state.push(action.payload);
        },
        removeProgramFromTaskbar: (state, action) =>
            state.filter((program) => program.id != action.payload),
    },
});

// Action creators are generated for each case reducer function
export const { addProgramToTaskbar, removeProgramFromTaskbar } =
    taskbarSlice.actions;

export default taskbarSlice.reducer;
