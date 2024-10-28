import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import List from "./pages/list/List"
import HotelPage from "./pages/Hotel/HotelPage"

const App = () => {
  return (
    <Routes>
      <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
      </Route>
    </Routes>
  )
}

export default App