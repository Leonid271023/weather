import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weather/weatherSlice";
import message from "../features/message/messageSlice";


export const store = configureStore({
    reducer: {
        weather,
        message,
    },
})