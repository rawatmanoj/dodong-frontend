import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  token: string
}

const initialState: CounterState = {
  token: "",
}

export const saveTokenReducer = createSlice({
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
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.token = ""
      },
  },
})

// Action creators are generated for each case reducer function
export const { saveToken,deleteToken } = saveTokenReducer.actions

export default saveTokenReducer.reducer