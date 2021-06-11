import { configureStore } from '@reduxjs/toolkit';
import processesReducer from './processes.slice';
import taskbarReducer from './taskbar.slice';

export default configureStore({
    reducer: {
        processes: processesReducer,
        taskbar: taskbarReducer,
    },
});
