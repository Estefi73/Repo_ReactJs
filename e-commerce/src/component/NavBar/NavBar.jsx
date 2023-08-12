import {Link} from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    return(
        <nav className="navbar">
            <Link className="navLogo" to="/">ONLINE SHOP</Link>

            <div className='navItems'>
                <Link class="navLinks" to='/category/celulares'><button>Celulares</button></Link>
                <Link class="navLinks" to='/category/televisores'><button>Televisores</button></Link>
                <Link class="navLinks" to='/category/notebook'><button>Notebooks</button></Link>
            </div>

            <CartWidget/>
        </nav>
    );
}

export default NavBar;