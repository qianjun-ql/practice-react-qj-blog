import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  const title = "Welcome to my blog";
  const likes = 50;

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
