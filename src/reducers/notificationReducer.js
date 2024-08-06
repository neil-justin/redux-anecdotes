import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { message: '' },
  reducers: {
    populateNotification(state, action) {
      return action.payload
    }
  }
})

export const { populateNotification } = notificationSlice.actions

export const setNotification = (text, seconds) => {
  return async dispatch => {
    dispatch(
      populateNotification({ message: text })
    )
    setTimeout(() => {
      // this empty the state
      populateNotification({ message: '' })
    }, seconds);
  }
}
export default notificationSlice.reducer