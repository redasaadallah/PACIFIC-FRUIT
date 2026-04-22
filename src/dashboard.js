import "./styles/dashboard.css"
import Baradmin from "./composants/baradmin";
import Headeradmin from "./composants/headeradmin";
import trend from "./img/trend.png"
import clipboard from "./img/clipboard.png"
import {useNavigate} from "react-router-dom"

function Dashboard(){
    const navigate=useNavigate();
    return(<>
    <Baradmin/>
    <Headeradmin/>
    <div id="s1">
        <div>
        <div>
            <h1>Nombre total de réservations</h1>
            <div>
                <h3>+8 %<br/> vs<br/> l’année dernière</h3>
                <h1>21</h1>
            </div>
            <div><img src={trend}/></div>
        </div>
        <div>
            <h1>Nombre total de réservations</h1>
            <div>
                <h3>+8 %<br/> vs<br/> l’année dernière</h3>
                <h1>21</h1>
            </div>
            <div><img src={trend}/></div>
        </div>
        <div>
            <h1>Nombre total de réservations</h1>
            <div>
                <h3>+8 %<br/> vs<br/> l’année dernière</h3>
                <h1>21</h1>
            </div>
            <div><img src={trend}/></div>
        </div>
        <div>
            <h1>Nombre total de réservations</h1>
            <div>
                <h3>+8 %<br/> vs<br/> l’année dernière</h3>
                <h1>21</h1>
            </div>
            <div><img src={trend}/></div>
        </div>
        
        </div>
        <div>
            <button>Voir les détails</button>
        </div>
    </div>
    <div id="s2">
        <div>
            <div>
                <div>
                    <h3>les nouvelles demandes à traiter</h3>
                    <p>26 demandes</p>
                </div>
                <img src={clipboard}/>
            </div>
            <table>
                <tr>
                    <td>SAADALLAH REDA</td>
                    <td><div className="status">en attente</div></td>
                    <td><div className="type">Réservation</div></td>
                    <td>01/04/2026</td>
                </tr>
                <tr>
                    <td>SAADALLAH REDA</td>
                    <td><div className="status">en attente</div></td>
                    <td><div className="type">Réservation</div></td>
                    <td>01/04/2026</td>
                </tr>
                <tr>
                    <td>SAADALLAH REDA</td>
                    <td><div className="status">en attente</div></td>
                    <td><div className="type">Réservation</div></td>
                    <td>01/04/2026</td>
                </tr>
               
            </table>
            <div>
                <button>Voir les détails</button>
            </div>
        </div>
        {/* ============================================================== */}
        <div>
            <div>
                <div>
                    <h3>les nouvelles demandes à traiter</h3>
                    <p>26 demandes</p>
                </div>
                <img src={clipboard}/>
            </div>
             <table>
                <tr>
                    <td>SAADALLAH REDA</td>
                    <td><button className="afficher">Afficher</button></td>
                    <td><button className="supprimer">Supprimer</button></td>
                    <td>01/04/2026</td>
                </tr>
               
            </table>
        </div>
    </div>
    </>);
}
export default Dashboard;