import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      filter {' '}
      <input
        name="filter"
        onChange={(event) => dispatch(filterChange({ substring: event.target.value }))}
      />
    </div>
  )
}

export default Filter