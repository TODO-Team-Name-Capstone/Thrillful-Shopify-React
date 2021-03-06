import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';
import messageReducer from './redux/messageSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
    },
});
