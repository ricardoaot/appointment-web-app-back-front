import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userAppointmentsSlice from "./userAppointmentsSlice";

const store = configureStore({
    reducer: {
        userState: userSlice.reducer,
        userAppointmentsState: userAppointmentsSlice.reducer
    }
})

export default store