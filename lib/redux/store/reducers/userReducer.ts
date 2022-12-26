import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@/components/post/types'

export interface UserState {
  token: string,
  user: UserType | null
}

const initialState: UserState = {
  token: "",
  user:null
}

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveToken: (state,action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload
    },
    deleteToken: (state) => {
        state.token = "";
        state.user = null;
      },
    saveUser: (state,action: PayloadAction<UserType>) => {
      console.log(action.payload,"action,payload")
        state.user = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { saveToken,deleteToken,saveUser } = userReducer.actions

export default userReducer.reducer