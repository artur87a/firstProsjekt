import "./Navbar.css"
import { AiFillCar, AiFillHome,  } from 'react-icons/ai'
import { LuAccessibility} from "react-icons/lu";

export default function Navbar() {
    const firstHref = "https://www.vg.no/"
    return (
        <nav>
    <a href="#top">
      <li>
        <p>Top</p>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
      </li>
    </a>
    <a href="#main">
      <li>
        <p>About</p>
        <img src="https://cdn-icons-png.flaticon.com/512/1/1176.png" />
      </li>
    </a>
    <a href="#projects">
      <li>
        <p>Projects</p>
        <img src="https://cdn-icons-png.flaticon.com/512/1/1176.png" />
      </li>
    </a>
    
      <a href="#noen">
      
      <AiFillCar className="icon" />
      </a>

      <a href="#it">
      <LuAccessibility className="icon" />
      </a>
    
    
        </nav>
    )
}

export const NavItems = () => {
    return (
        <li>navitem</li>
    )
}