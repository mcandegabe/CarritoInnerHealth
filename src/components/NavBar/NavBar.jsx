import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import InnerHealthStoreImage from '../../images/InnerHealthStore.png';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg  nav-top sticky-top">
            <div className="nav container-fluid">
                <Link to="/" className="navbar-brand">
                    <div className="d-flex align-items-center">
                        <img src={InnerHealthStoreImage} alt="Inner Health Group Store" className="navbar-logo" />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse upper-menu" id="navbarNav">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link" href="/">Inicio</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="/category/cursos">Cursos</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="/category/algoritmo">Créditos Algoritmo</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="/category/libros">Libros</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="/category/complete_dynamics">Complete Dynamics</a>
                    </div>
                </div>
                <Link to="/Cart">
                    <div className="cart-widget">
                        <CartWidget />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;