
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>Private Contact</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourite">favourite</Link>
        </li>
      </ul>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="*" element={<Notfound/>} />
        
      </Routes>
    </Router>
    
  );
}

export default App;





///////////////////////////

npm install react-hook-form (3:12:00)


reset();  --> reset the submit form



server running ...>json-server --watch db.json --port 3004