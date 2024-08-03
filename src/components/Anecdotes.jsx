import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  console.log('anecdote', anecdote)
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>

  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(state => {
    if (state.filter === '') return state.anecdotes

    return state.anecdotes.filter(anecdote => {
      return anecdote.content.includes(state.filter)
    })
  })
  const dispatch = useDispatch()

  const descendinglySortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  return (
    <>
      {descendinglySortedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(voteAnecdote({ id: anecdote.id }))}
        />
      )}
    </>
  )
}

export default Anecdotes