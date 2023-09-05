import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import NewsDetailsPage from './NewsDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/noticias/:id" element={<NewsDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
