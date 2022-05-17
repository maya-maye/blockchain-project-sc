import React, { Component } from "react";
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import {Link} from "react-router-dom"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><Link className="link" to="/">Fictune</Link><i className = "fab fa-react"></i></h1>
                {/* <h1 className="navbar-logo">Fictune<i className = "fab fa-react"></i></h1> */}

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link  className="link" to="/login">
                <Button>Sign Up</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar