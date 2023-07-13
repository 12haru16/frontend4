import './App.css';
import Header from './components/header';
import Main from './components/main';
import SignIn from './components/certifications/signIn';
import Otherpage from './components/camera/otherPopup';
import CameraPage from './components/camera/cameraPage';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <p></p>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="other" element={<Otherpage />} />
            <Route path="camerapage" element={<CameraPage />} />
        </Routes>
    </div>
  );
}

export default App;
