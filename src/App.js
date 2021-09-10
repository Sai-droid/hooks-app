import logo from './logo.svg';
import './App.scss';
import NameTag from '../src/Components/nameTag'
import Input from './Components/Input'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title name">Names List</h1>
        <Input placeholder="name" name="rammaya"></Input>
        <br/>
        <NameTag firstname ="peter" lastname ="peterson"></NameTag>
        <NameTag firstname ="john" lastname ="johnson" />
        <NameTag firstname ="will" lastname ="willson" />
        <NameTag />
        </header> 
    </div>
  );
}

export default App;
