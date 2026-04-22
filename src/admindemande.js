import Baradmin from "./composants/baradmin";
import Headeradmin from "./composants/headeradmin";
import "./styles/admindemande.css"
import openfile from "./img/open-file.png"
import React,{useEffect,useState} from "react"

function Admindemande(){
    const rows = [];
    const [showdetails,setshowdetails]=useState(false);
    for (let i = 0; i < 20; i++) {
  rows.push(
    <tr key={i}>
      <td>BB203338</td>
      <td>SAADALLAH REDA</td>
      <td>Réservation</td>
      <td>en attente</td>
      <td>01/04/2026</td>
      <td><button>Voir les détails</button></td>
    </tr>
  );
}
    return(<>
    <Baradmin/>
    <Headeradmin/>
    <div id="ademande1">
        <h1>Demandes de réservation/prolongation</h1>
        <p>26 demandes</p>
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
            <label>Réservation</label>
            <input type="checkbox"/>
            <label>Prolongation</label>
        </div>
        </div>
    </div>
    {/* ====================================== */}
   
    <div id="ademande2">
        <table>
            <tr>
                <th>CIN</th>
                <th>Nom du client</th>
                <th>Type de demande</th>
                <th>Statut</th>
                <th>Date souhaitée</th>
                <th></th>
            </tr>
            <tbody>
    <tr style={{backgroundColor:showdetails===true?"#FFEED4":"#FFFFFF"}}>
      <td>BB203338</td>
      <td>SAADALLAH REDA</td>
      <td>Réservation</td>
      <td>en attente</td>
      <td>01/04/2026</td>
      <td>{!showdetails &&<button onClick={()=>{setshowdetails(true)}}>Voir les détails</button>}</td>
    </tr>
    <tr>
        {showdetails &&
        <td id="tddetails" colSpan={6}>
            <div id="detailsdemande">
            <table>
                <tr >
                    <td>Nom complet : SAADALLAH REDA</td>
                    <td>CIN : BB203338</td>
                    <td>Email : redasaadallah77@gmail.com</td>
                    <td>Téléphone : 0625700603</td>
                </tr>
                <tr>
                    <td>Type de demande : Réservation</td>
                    <td> Quantité Totale (t) : 2000</td>
                    <td> Durée de stockage (jour) : 60</td>
                    <td> Date souhaitée : 01/04/2026</td>
                </tr>
                <tr>
                    <td>Prix totale : 12000 DHs</td>
                </tr>
            </table>
            <h3>Produit : </h3>
            <div>
                <div>
                    <h5>Fromage(100t)</h5>
                    <div><label>Facture</label><button><img src={openfile}/></button></div>
                    <div><label>Attestation ONSSA</label><button><img src={openfile}/></button></div>
                    <div><label>Registre de commerce (RC)</label><button><img src={openfile}/></button></div>
                </div>
            </div>
            <div>
                <button>Accepter la demande</button>
                <button>Refuser la demande</button>
                <button onClick={()=>{setshowdetails(false)}}>Masquer les détails</button>
            </div>
            </div>
            </td>}
    </tr>
            {rows}
            </tbody>
            
            
        </table>
    </div>
    </>);
}
export default Admindemande;