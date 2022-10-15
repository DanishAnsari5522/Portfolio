
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Home from './Component/Home'
import Navigation from './Navigation'
import Project from './Component/Project';
import Activity from './Component/Activity';
import Contact from './Component/Contact';
import DetailProjectpage from './Component/DetailProjectpage';
import DetailProjectComp from './Component/DetailProjectComp';
import Test from './Component/Test'

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/Education" component={Test} />
          <Route exact path="/Activity" component={Activity} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/dan" component={DetailProjectpage} />
          <Route exact path="/DetailProjectComp/:id" component={DetailProjectComp} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
