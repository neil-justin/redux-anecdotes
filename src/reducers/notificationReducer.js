import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { message: '' },
  reducers: {
    setNotification(state, action) {
      return { message: action.payload.message }
    },

    removeNotification(state, action) {
      return { message: '' }
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer