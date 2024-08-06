import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote.content,
    id: anecdote.id,
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'VOTE':
//       const id = action.payload.id
//       const anecdoteToChange = state.find(anecdote => anecdote.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }
//       return state.map(anecdote =>
//         anecdote.id !== id ? anecdote : changedAnecdote
//       )
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     default: return state
//   }
// }

// const vote = (anecdoteId) => {
//   return {
//     type: 'VOTE',
//     payload: {
//       id: anecdoteId
//     }
//   }
// }

// const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: asObject(content)
//   }
// }

// export { vote, createAnecdote }

// export default reducer

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(asObject(action.payload))
    },
    updateAnecdote(state, action) {
      const id = action.payload.id
      const updatedState = state.map(anecdote => {
        if (anecdote.id === id) return action.payload
        return anecdote
      })

      return updatedState
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const { appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(anecdote))
  }
}

const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateOne(anecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export { initializeAnecdotes, createAnecdote, voteAnecdote }
export default anecdoteSlice.reducer