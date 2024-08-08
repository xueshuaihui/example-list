import { Provider } from 'react-redux'
import store from './store'
import Child from './app'

export default () => {
  const {countStore} = store.getState()
  
  return (
    <Provider store={store}>
      <div>this is root {countStore.count}
        <Child />
      </div>
    </Provider>
    
  )
}