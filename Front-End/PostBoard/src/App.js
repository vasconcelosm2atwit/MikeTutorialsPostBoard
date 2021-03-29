import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CreatePost from './Components/Project/CreatePost';
import { Provider } from 'react-redux';
import store from "./store";
import updatePostClass from './Components/Project/UpdatePostClass';

{/** BrowserRouter can be used as Router, route and switch*/}

function App() {
  return (
    <Provider store= { store }>
      <Router> 
        {/** Router allows us to route the entire page*/}
        <div className="App">
            <Header></Header>
            <Route exact path="/Dashboard" component={ Dashboard }></Route>
            {/** This allows us to route the addPage*/}
            <Route exact path="/CreatePost" component={ CreatePost }></Route>
            <Route exact path="/UpdatePostClass/:id" component={ updatePostClass }></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
