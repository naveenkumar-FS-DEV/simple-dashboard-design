import Sidebar from "./Components/Sidebar"
import './App.css'
import Header from "./Components/Header"
import Board from "./Components/Board"
const App = () => {
  return (
    <div className="container">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="header">
      <Header />
      <Board />
    </div>
    </div>
  )
}

export default App
