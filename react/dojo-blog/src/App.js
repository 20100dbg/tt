import Navbar from './Navbar'
import Home from './Home'
import Demo from './Demo'
import Create from './Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
