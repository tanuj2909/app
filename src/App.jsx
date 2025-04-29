import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Register/>} path="/register"></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
