const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_ANECDOTES':
      return action.payload.substring
    default: return state
  }
}

const filterChange = (substring) => {
  return {
    type: 'FILTER_ANECDOTES',
    payload: {
      substring
    }
  }
}

export default filterReducer
export { filterChange }