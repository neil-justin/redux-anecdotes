// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'FILTER_ANECDOTES':
//       return action.payload.substring
//     default: return state
//   }
// }

// const filterChange = (substring) => {
//   return {
//     type: 'FILTER_ANECDOTES',
//     payload: {
//       substring
//     }
//   }
// }

// export default filterReducer
// export { filterChange }

import { createSlice, current } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload.substring
    }
  }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer