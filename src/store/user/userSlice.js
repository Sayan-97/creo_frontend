import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleUser: (state, action) => {
            state.userType = action.payload
        },

        logoutSuccess: (state) => {
            state.userType = null
        }
    }
})

export const { toggleUser, logoutSuccess } = userSlice.actions
export default userSlice.reducer