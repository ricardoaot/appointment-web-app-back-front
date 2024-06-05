import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice(
    {
        name: "user",
        initialState: {                    
        },
        reducers: {
            fetchUser: (state, action) => {
              return action.payload
            },
            logout: (state, action) => {
                return {}
            }
        } 
    }
)

export default userSlice
export const { fetchUser,logout } = userSlice.actions