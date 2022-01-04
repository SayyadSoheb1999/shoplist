
import './App.css';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import {Add} from './Components/Add'
import {Main} from './Components/Main'
import {EditCompo} from './Components/EditCompo'

function App() {
  return (
  <div>
  {/* <h1>this is App</h1> */}
    <BrowserRouter>
    <Link to='/'></Link>
    <Switch>
      <Route exact path='/'>
  <Main />

      </Route>
    <Route exact path='/add'>
  <Add/>
    </Route>
    <Route exact path='/edit/:id'>
  <EditCompo/>
    </Route>
   
  </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
