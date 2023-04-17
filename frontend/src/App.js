import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import './styles/App.css'
import ExploreNotes from './pages/ExploreNotes';
import CreateNote from './pages/CreateNote';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/explore" element={<ExploreNotes />} />
        <Route path="/profile" element={<CreateNote />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App
