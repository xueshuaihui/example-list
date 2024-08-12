import { useNavigate, useSearchParams } from 'react-router-dom'

const  App3 = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const name = searchParams.get('name')
  return (
    <div>
      <h1 onClick={() => navigate('/app2') }>App3</h1>
      <span>id: {id}</span>
      <span>name: { name }</span>
    </div>
  )
}
export default App3
