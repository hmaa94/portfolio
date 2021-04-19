import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import UxProjects from "./components/UxProjects";
import WebProjects from "./components/WebProjects";
import VySmidig from "./components/views/UXprojects/VySmidig";
import NavBar from "./components/Navbar";

const App =() => {
  return (

    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component ={Home} path ="/" exact/>
      <Route component ={About} path ="/about"/>
      <Route component ={UxProjects} path ="/uxprojects"/>
      <Route component = {WebProjects} path ="/webprojects"/>
      <Route component = {VySmidig} path ="/vysmidig"/>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
