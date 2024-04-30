import { createSlice } from "@reduxjs/toolkit"
import { IAuthState } from "../../../common/types/auth"
import { loginUser, registerUser } from "../../thunk/auth"

const initialState: IAuthState = {
  user: {
    id: null,
    email: '',
    createdAt: '',
    updatedAt: '',
    watchList: [{
      id: null,
      email: '',
      createdAt: '',
      updatedAt: '',
      user: null
    }]
  },
  isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLogged = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLogged = true
    })
  }
})


export default authSlice.reducer