import logo from "./logo.svg";
import "./App.css";
import NameTag from "../src/Components/nameTag";
import Input from "./Components/Input";
import AboutPage from "./Components/Routing/AboutPage";
import HomePage from "./Components/Routing/HomePage";
import CustomerPage from "./Components/Routing/CustomerPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calories from "./Components/Calories";



function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="title name">Names List</h1>
          {/* <Input placeholder="name" name="rammaya"></Input>
        <br/>
        <NameTag firstname ="peter" lastname ="peterson"></NameTag>
        <NameTag firstname ="john" lastname ="johnson" />
        <NameTag firstname ="will" lastname ="willson" />
        <NameTag /> */}
          <Link to="/home">
            <AboutPage />
          </Link>
          <HomePage />
          <Calories />
          <CustomerPage onClick={CustomerPage} />
         
        </header>
        <Switch>
          {/* <Route exact path='/' component={AboutPage} /> */}
          <Route path="/home" component={AboutPage} />
          <Route path="/customerpage" component={CustomerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
