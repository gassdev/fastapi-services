import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:8000/products')
      const content = await response.json()

      setProducts(content)
    })()
  }, [])

  const del = async (id) => {
    if (window.confirm('Are you sure to delete this record?')) {
      await fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
      })

      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to="/create" className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.qty}</td>
                <td>
                  <a
                    onClick={(e) => del(p.id)}
                    href="#/"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default Products
