import './index.css';
import Header from './components/Header';
import Meme from './components/Meme';
import { Practice } from './components/Practice';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Practice />
    </div>
  );
}

export default App;
