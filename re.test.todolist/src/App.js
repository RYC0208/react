import Header from './component/Header';
import Header from './component/Editor';
import Header from './component/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Editor/>
      <List/>
    </div>
  );
}

export default App;
