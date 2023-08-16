import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => navigate('/subpage')}>To Subpage</button>
      </header>
    </div>
  );
}

export default App;
