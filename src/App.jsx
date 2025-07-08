import { Route, Routes } from "react-router-dom"
import { ProductPage, ProductsPage } from "./pages"

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </>
  )
}

export default App
