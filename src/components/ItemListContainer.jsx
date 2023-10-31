import InnerHealthStoreRound from '../images/InnerHealthStoreRound.png';

export const ItemListContainer = ({ innerHealthRound, mensajeBienvenida, introduccion }) => {
    return (
        <div className="portada">
            <div className="contenido">
                <img src={InnerHealthStoreRound} alt="Inner Health Group Store" />
                <h1>{mensajeBienvenida}</h1>
                <p>{introduccion}</p>
            </div>
        </div>
    );
};