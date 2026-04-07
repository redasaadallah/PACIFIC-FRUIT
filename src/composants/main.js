import "../styles/main.css"
function Main({back}){
    return(<>
    <div id="home1">
        <img src={back} alt=""/>
        <div></div>
        <h1> Réservez votre place dans nos frigos dès aujourd’hui</h1>
        <h3>Une solution moderne, fiable et performante pour garantir la sécurité et la conservation optimale de vos produits.</h3>
        <div>
        <a href="">Réserver un espace</a>
        <a href="">Contactez-nous</a>
        </div>
    </div>
    </>);
}
export default Main;