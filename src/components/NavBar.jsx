import { CartWidget } from './CartWidget';
import InnerHealthStoreImage from '../images/InnerHealthStore.png';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navegador-top">
            <div className="navegador container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="d-flex align-items-center">
                        <img src={InnerHealthStoreImage} alt="Inner Health Group Store" className="navbar-logo" />
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu-superior" id="navbarNav">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link" href="#cursos">Cursos</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="#creditos-algoritmo">Créditos Algoritmo</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="#libros">Libros</a>
                        <div className="d-none d-lg-block vertical-line"></div>
                        <div className="d-lg-none mb-2"></div>
                        <a className="nav-link" href="#complete-dynamics">Complete Dynamics</a>
                    </div>
                </div>
                <div className="cart-widget">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;