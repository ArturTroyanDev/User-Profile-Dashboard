// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { PageOne, PageTwo } from './components/Pages';
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='ProfilePage' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
