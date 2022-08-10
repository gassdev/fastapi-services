import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsCreate from './components/ProductsCreate'
import Orders from './components/Orders'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<ProductsCreate />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<h1>Not Found...</h1>} />
      </Routes>
    </Router>
  )
}
export default App
