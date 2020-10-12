import { render } from '@testing-library/react';
import React , {Component , } from 'react';
import Logo from '../../Images/mmt-white.png';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component{
    state = { clicked: false}

    handleClick= () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <header className="Navbar">
            <nav className="NavbarItems">
                <img  src={Logo} className="navbar-logo"/>
            

                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                
                                
                                {item.title}
                                 </a>
                            </li>
                        )
                    })}
                  </ul>
                <button>Acessar</button>
                <div></div>
            <div className='spacer '/>
              
               

           
                

            
        </nav>    
        </header>
        )
    }
}



export default Navbar;