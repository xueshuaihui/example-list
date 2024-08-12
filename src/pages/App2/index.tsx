import { useParams } from 'react-router-dom'

const  App2 = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1>App2</h1>
      <span>id: {params.id }</span>
      <span>name: { params.name }</span>
    </div>
  )
}
export default App2
