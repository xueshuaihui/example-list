import { useSelector } from 'react-redux'

export default () => {
  const {count} = useSelector(state => state.countStore
  )
  return (
    <div>
      this is children
      {count}
    </div>
  )
}