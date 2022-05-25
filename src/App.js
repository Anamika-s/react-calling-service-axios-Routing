import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';
import PersonAdd from './PersonAdd';
import PersonDelete from  './PersonDelete';
import PersonEdit from './PersonEdit';
import Home from './Home';
import About from './About';
import {BrowserRouter , Route , Switch} from "react-router-dom";
import NoPage from './NoPage';
import NavBar  from './NavBar';

function App() {
  return (
    <div className="App">

     <h1>  Axios Library Demo </h1>
     <BrowserRouter>
     <NavBar/>
     <Switch>
     <Route path='/' exact component={Home} />
     <Route path="/about" exact component={About}/>
     <Route  path="/add" exact component={PersonAdd}/>
     <Route  path="/delete" exact component={PersonDelete}/>
     <Route path="/edit" exact component={PersonEdit}/>
     <Route  path="/get" exact component={PersonList}/>
     <Route component={NoPage}/>
      </Switch>
     </BrowserRouter>
     {/* <Home/>
     <About/>
     <PersonList/>
     <PersonAdd/>
     <PersonDelete/>
     <PersonEdit/> */}
    </div>
  );
}

export default App;
