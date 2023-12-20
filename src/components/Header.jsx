import { Link } from "react-router-dom"
import './Header.css'
function Header (){

return (

    <header className="sidebar">

          
      
        <h1>Bob and Mary</h1>
        
        <Link to="/">Home </Link>
            <Link to="/location">Location </Link>
            <Link to="/registry">Registry </Link>
            <Link to="/story">Story </Link>
       
     
   



        
    </header>

)

}

export default Header