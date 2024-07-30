import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App