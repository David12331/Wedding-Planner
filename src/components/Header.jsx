import { Link } from "react-router-dom"
import './Header.css'
function Header (){

return (

    <header>

        
           

          
      <div className="sidebar">
        <h1>Bob and Mary</h1>
        <div className="links-container">
        <Link to="/">Home </Link>
            <Link to="/location">Location </Link>
            <Link to="/registry">Registry </Link>
            <Link to="/story">Story </Link>
        </div>
     
   
    </div>


        
    </header>

)

}

export default Header