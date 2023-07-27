import './App.css';

import Main from './components/main';
import Otherpage from './components/camera/otherPopup';
import CameraPage from './components/camera/cameraPage';
import Login from './components/login/login';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="main" element={<Main />} />
            <Route path="other" element={<Otherpage />} />
            <Route path="camerapage" element={<CameraPage />} />
        </Routes>
    </div>
  );
}

export default App;
