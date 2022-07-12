import { useState } from 'react';
import Data from './components/Data';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [forecast, setForecast] = useState(null);

  return (
    <>
      <Navbar setForecast={setForecast} />
      <Data forecast={forecast} />
      {!forecast && <Home />}
    </>
  );
}

export default App;
