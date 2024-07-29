import deepFreeze from "deep-freeze";
import anecdoteReducer from "./anecdoteReducer"

const initialState = [
  {
    content: 'If it hurts, do it more often',
    id: 0,
    votes: 0
  }, {
    content: 'Adding manpower to a late software project makes it later!',
    id: 1,
    votes: 0
  }, {
    content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    id: 2,
    votes: 0
  }
]

describe('anecdote reducer', () => {
  test('vote button increments', () => {
    const state = initialState
    const action = {
      type: 'VOTE',
      payload: {
        id: 0
      }
    }
    deepFreeze(state)

    const newState = anecdoteReducer(state, action)

    expect(newState[0].votes).toBe(1)
  })
})