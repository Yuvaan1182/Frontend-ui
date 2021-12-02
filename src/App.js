import './App.css';
import Test from './components/Test'
import Header from './components/Header'
import Home from './components/Home/Home';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Loading()
{
  return <h2>Loading...</h2>
}
const Item = Loadable({
  loader: ()=> import('./components/Item'),
  loading: Loading
})


function App() {
  return (
    <Router>
      <div className="App">
      {/* <Header />
      <Home /> */}
      <Switch>
        <Route path="/item/:id" component={Item} />
        <Route path="/" component={Test} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
