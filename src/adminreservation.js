import Baradmin from "./composants/baradmin";
import Headeradmin from "./composants/headeradmin";
import "./styles/adminreservation.css"
import openfile from "./img/open-file.png"
import React,{useEffect,useState} from "react"
import trash from "./img/trash.png"
import ares1 from "./img/ares1.png"
import ares2 from "./img/ares2.png"
import ares3 from "./img/ares3.png"

function Adminreservation(){
    const rows = [];
    const [showdetails,setshowdetails]=useState(false);
    for (let i = 0; i < 20; i++) {
  rows.push(
    <tr key={i}>
      <td>BB203338</td>
      <td>SAADALLAH REDA</td>
     <td><div></div></td>
      <td>01/03/2026</td>
      <td>01/04/2026</td>
      <td><div>
        <button><img src={trash}/></button>
        <button >Voir les détails</button>

        </div></td>
    </tr>
  );
}
    return(<>
    <Baradmin/>
    <Headeradmin/>
    <div id="areservation1">
        <h1>Demandes de réservation/prolongation</h1>
        <p>26 demandes</p>
        <div>
            <div>
                <div></div>
                <h3>Réservations à venir</h3>
            </div>
            <div>
                <div></div>
                <h3>Réservations actives</h3>
            </div>
            <div>
                <div></div>
                <h3>Réservations terminées</h3>
            </div>
        </div>
        <div>
           <div className="reda">
        <label className='option'>Chercher par :</label>
        <select  className='filiereetu' name="marque"  >
            <option>CIN</option>
            <option>NOM</option>
            

        </select>
        </div>
         <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Rechercher...</span>
        </label>
        </div>
        <div>
            <label>Filtrer par : </label>
            <input type="checkbox"/>
            <div></div>
            <input type="checkbox"/>
            <div></div>
            <input type="checkbox"/>
            <div></div>
        </div>
        </div>
    </div>
    {/* ====================================== */}
   
    <div id="areservation2">
        <table>
            <tr>
                <th>CIN</th>
                <th>Nom du client</th>
                <th>Statut</th>
                <th>Date de début</th>
                <th>Date souhaitée</th>
                <th></th>
            </tr>
            <tbody>
    <tr >
      <td>BB203338</td>
      <td>SAADALLAH REDA</td>
      <td><div></div></td>
      <td>01/03/2026</td>
      <td>01/04/2026</td>
      <td><div>
        <button><img src={trash}/></button>
        <button onClick={()=>{setshowdetails(true)}}>Voir les détails</button>

        </div></td>
    </tr>
            {rows}
            </tbody>
            
            
        </table>
    </div>
    {/* ========================boite de details */}
    {showdetails &&<>
    <div id="black"></div>
    <div id="resdetail">
        <div>
            <div>
                <img src={ares1}/>
                <h1>Informations du client</h1>
            </div>
            <table>
                <tr>
                    <td>Nom complet : SAADALLAH REDA</td>
                    <td>CIN : BB203338</td>
                </tr>
                <tr>
                    <td>Email : redasaadallah77@gmail.com</td>
                    <td>Téléphone : 0625700603</td>
                </tr>
            </table>
        </div>
        <div>
            <div>
                <img src={ares2}/>
                <h1>Informations sur la réservation </h1>
            </div>
            <table>
                <tr>
                    <td> Quantité des produits (tonne) : 2000</td>
                    <td> Durée de stockage (jour) : 60</td>
                </tr>
                <tr>
                    <td>Date de début : 01/03/2026</td>
                    <td>Date de fin : 25/04/2026</td>
                </tr>
                <tr>
                    <td>Prix totale : 12000 DHs</td>
                </tr>
            </table>
        </div>
        <div>
            <div>
                <img src={ares3}/>
                <h1>Documents du produit</h1>
            </div>
            <table>
                <tr>
                    <th>Fromage(100t)</th>
                    <td><div><label>Facture</label><button><img src={openfile}/></button></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td><div><label>Attestation ONSSA</label><button><img src={openfile}/></button></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td><div><label>Registre de commerce (RC)</label><button><img src={openfile}/></button></div></td>
                </tr>
            </table>
        </div>
        <div>
            <button onClick={()=>{setshowdetails(false)}}>Masquer les détails</button>
        </div>
    </div></>}
    </>);
}
export default Adminreservation;