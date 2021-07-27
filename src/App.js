
import Home from './COMPONENTS/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './COMPONENTS/NoMatch/NoMatch';
import FriendDetail from './COMPONENTS/FriendDetail/FriendDetail';



function App() {
  return(
    <Router>


      <Switch>
        <Route exact path="/home">
            <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>

    </Router>



  );
}

export default App;
