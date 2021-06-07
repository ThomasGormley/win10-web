import { configureStore } from '@reduxjs/toolkit';
import processesReducer from './processes.slice';
export default configureStore({
    reducer: {
        processes: processesReducer,
    },
});
