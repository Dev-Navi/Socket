import {Route,Routes} from 'react-router-dom'
import Chat from './pages/Chat';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
