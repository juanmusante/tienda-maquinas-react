import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBar(){
    return(
        <header className="App-header shadow p-3 mb-5 bg-body rounded">
            <p className="logo">TATT00 SH0P</p>
            <nav className="navegador">
                <ul className="ul">
                    <li className="li">
                        <a href="filtro1.html">FILTRO 1</a>
                    </li>
                    <li className="li">
                        <a href="filtro2.html">FILTRO 2</a>
                    </li>
                    <li className="li">
                        <a href="filtro3.html">FILTRO 3</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}
export default NavBar;