import './App.css';
import Home from './Home.jsx';
import Spatial from './Spatial.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  const date = new Date(Date.now())
  return (
    <Router>
      <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spatial" component={Spatial} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
