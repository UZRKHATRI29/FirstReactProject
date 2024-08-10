

import './index.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title = 'Welcome to the new blog'
  const liked = 50;
  const link = "www.google.com"
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
