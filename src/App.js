
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Delivery from './pages/Delivery';
import Home from './pages/Home';
import SigIn from './pages/SigIn';
import Users from './pages/Users';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SigIn />}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
