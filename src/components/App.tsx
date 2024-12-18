import '../assets/WestwoodSans-Regular.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import AppWrapper from './shared/AppWrapper';
import HomePage from '../pages/HomePage';
import Pageddijit from '../pages/Pageddijit';
import TiffanyPage from '../pages/TiffanyPage';
import NinaPage from '../pages/NinaPage';
import JeffreyPage from '../pages/JeffreyPage';
// Import other person pages here

function App(): JSX.Element {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnooshkhaPage" element={<Pageddijit />} />
          <Route path="/TiffanyPage" element={<TiffanyPage />} />
          <Route path="/NinaPage" element={<NinaPage />} />
          <Route path="/JeffreyPage" element={<JeffreyPage />} />
        </Routes>
    </Router>
  );
}

export default App;
