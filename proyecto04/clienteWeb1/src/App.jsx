import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { CardCustomers } from './components/cardCustomers'

function App() {
  const [count, setCount] = useState(0)
  const { isLoading, data } = useFetch('http://localhost:3000/customers')

  return (
    <>
      <div className="container text-center">
        <div className="container mt-3 pt-5">
          <div className="row">
            {
              !isLoading && data.map((ele,index) =>
                <div className="col-sm-4 my-2" key={index}>
                  <CardCustomers customer={ele} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
