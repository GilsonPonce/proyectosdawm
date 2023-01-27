import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { CardCustomers } from './components/cardCustomers'

function App() {
  const [count, setCount] = useState(0)
  const { isLoading, data } = useFetch('http://localhost:3000/customers')

  return (
    <div className="container text-center">
      <div className="fixed-top bg-black">
        <h1 className='my-3 text-white'>Reportes de Venta</h1>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          {
            !isLoading && data.map(ele =>
              <div className="col-sm-4 my-2">
                <CardCustomers customer={ele} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
