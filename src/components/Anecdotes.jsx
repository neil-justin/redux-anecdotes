import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
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

  const handleVoteButtonClick = (event, anecdote) => {
    dispatch(voteAnecdote({ id: anecdote.id }))
    dispatch(
      setNotification({ message: `you voted '${anecdote.content}'` })
    )
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000);
  }

  return (
    <>
      {descendinglySortedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={(e) => handleVoteButtonClick(e, anecdote)}
        />
      )}
    </>
  )
}

export default Anecdotes