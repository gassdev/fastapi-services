import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from './Wrapper'

const ProductsCreate = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [qty, setQty] = useState('')

  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, qty }),
    })

    await navigate(-1)
  }

  return (
    <Wrapper>
      <form className="mt-3" onSubmit={submit}>
        <div className="form-floating pb-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Name"
          />
          <label>Name</label>
        </div>
        <div className="form-floating pb-3">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Price"
          />
          <label>Price</label>
        </div>
        <div className="form-floating pb-3">
          <input
            onChange={(e) => setQty(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Qty"
          />
          <label>Qty</label>
        </div>
        <div className="form-floating pb-3">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </Wrapper>
  )
}

export default ProductsCreate
