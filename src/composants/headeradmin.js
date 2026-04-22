import "../styles/headeradmin.css"
import logout from "../img/log-out.png"
import france from "../img/france.png"
import arow from "../img/arowupdown.png"
function Headeradmin(){
    return(<>
    <div id="ha">
        <div>
            <div>
                <hr/>
                <h1>Espace <span className="span">Administrateur</span></h1>
                <p>9 mars 2026</p>
            </div>
            <div>
                <div>
                    <div></div>
                    <img/>
                </div>
                <button><img src={logout}/>Se déconnecter</button>
                <button><img src={france} alt=""/>France <img src={arow} alt=""/></button>

            </div>
        </div>
        
    </div>
    </>);
}
export default Headeradmin;