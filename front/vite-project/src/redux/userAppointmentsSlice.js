import { createSlice } from "@reduxjs/toolkit"

const userAppointmentsSlice = createSlice(
    {
        name: "userAppointments",
        initialState: [],
        reducers: {
            fetchAppointment: (state, action) => {
              //console.log(action.payload)
              //console.log(state)  
              return action.payload
            }
        }
    }
)
export default userAppointmentsSlice
export const { fetchAppointment } = userAppointmentsSlice.actions