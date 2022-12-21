import CartWidget from './Cartwidget';
import logo from './images/logo.png'

function Navbar() {
    return ( 
        <header>
            <nav className="nav">
                <img src={logo} alt="Logo de lavado de automovil" />
                <ul>
                    <li><a href="/#">INICIO</a></li>
                    <li><a href="/#">QUIENES SOMOS</a></li>
                    <li><a href="/#">PRODUCTOS</a></li>
                    <li><a href="/#">CONTACTO</a></li>
                    <li>< CartWidget /></li>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;