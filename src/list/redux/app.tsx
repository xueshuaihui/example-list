import { useSelector } from 'react-redux'
import { increment, decrement } from './store/modules/countStore'
interface State {
  countStore: {
    count: number
  }
}
export default () => {
  const { count } = useSelector((state: State) => state.countStore)
  return (
    <div>
      <button onClick={()=> decrement}>-</button>
      {count}
      <button onClick={() => {increment()}}>+</button>
    </div>
  )
}

