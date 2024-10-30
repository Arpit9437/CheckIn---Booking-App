import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import List from "./pages/list/List"
import HotelPage from "./pages/Hotel/HotelPage"
import { Login } from "./pages/login/Login"

const App = () => {
  return (
    <Routes>
      <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
          <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App