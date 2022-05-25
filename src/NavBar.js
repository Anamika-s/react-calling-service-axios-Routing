import { Link } from "react-router-dom";
import './index.css';
const NavBar = ()=>
{
  return(
    <nav>
      <ul>
 
      <li><a href ="/"> Home Page </a> </li> 
      <li><a href="/about"> About Us  </a> </li> 
      <li><a href="/add">Add </a> </li> 
      <li><Link to="/edit"> Edit Person </Link> </li> 
      <li><Link to="/delete"> Delete Person </Link> </li> 
      <li><Link to="/get"> Get All Persons </Link> </li> 
     
      </ul>
    </nav>
  );

}
export default NavBar;