import Navbar from './Navbar';
import Home from './Home';

// JSX Template
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

// Export so we can use it in different apps
export default App;
