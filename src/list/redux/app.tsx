import { useSelector } from 'react-redux'
import { increment, decrement } from '@/list/redux/store/modules/countStore.ts'

export default () => {
  const {count} = useSelector(state => state.countStore
  )
  return (
    <div>
      <button>-</button>
      {count}
      <button >+</button>
    </div>
  )
}