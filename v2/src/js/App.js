
import '../css/App.css';

function Navbar(){
  return (
    <nav className = "navbar navbar-expand-lgs">
      <div className = "container-fluid">
        <a className = "navbar-brand" href="#"> About Me </a>
        <div className = "justify-content-start">
          <ul className = "navbar-nav mb-2 mb-lg-0">
            <li className = "nav-item">
              <a className = "nav-link" href = "#"> Projects </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

function Main(){
  return(
    <div className = "container mt-2">
      <div className = "row">
        <div className = "col-12 text-center">
          <h1>In The Working!</h1>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
