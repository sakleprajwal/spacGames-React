import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
				<Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
