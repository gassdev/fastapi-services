import { useEffect, useState } from 'react'

const Orders = () => {
  const [id, setId] = useState('')
  const [qty, setQty] = useState('')
  const [message, setMessage] = useState('Buy your favorite product')

  useEffect(() => {
    ;(async () => {
      try {
        if (id) {
          const response = await fetch(`http://localhost:8000/products/${id}`)
          const content = await response.json()
          const price = parseFloat(content.price) * 1.2
          setMessage(`Your product is $${price}`)
        }
      } catch (e) {
        setMessage('Buy your favorite product')
      }
    })()
  }, [id])

  const submit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:8001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, qty }),
    })

    setMessage('Thank you for your order')
  }

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
        <p className="lead">{message}</p>
      </div>

      <form onSubmit={submit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="form-label">Product</div>
            <input
              className="form-control"
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="col-sm-6">
            <label className="form-label">Qty</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>
        <hr className="my-4" />
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Buy
        </button>
      </form>
    </div>
  )
}

export default Orders
