import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/modules/countStore'
interface State {
  countStore: {
    count: number
  }
}
export default () => {
  const { count } = useSelector((state: State) => state.countStore)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> { dispatch(decrement()) }}>-</button>
      {count}
      <button onClick={() => {dispatch(increment())}}>+</button>
    </div>
  )
}

