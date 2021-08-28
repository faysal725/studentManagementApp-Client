import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import MenuBar from './Components/MenuBar/MenuBar';
import AddStudents from './Components/AddStudents/AddStudents';



function App() {
  return (
    <Router>
    <MenuBar></MenuBar>
    <Switch>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route path="/addStudents">
        <AddStudents></AddStudents>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
