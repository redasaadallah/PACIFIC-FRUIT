import "./styles/espaceclient.css"
import account from "./img/account.png"
import logout from "./img/log-out.png"
import france from "./img/france.png"
import arow from "./img/arowupdown.png"
import infopers from "./img/infopers.png"
import pencil from "./img/pencil.png"
import about from "./img/about.png"
import Footer from "./composants/footer"
import updates from "./img/updates.png"
import openfile from "./img/open-file.png"
import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Ouinon from "./composants/ouinon"
import Prolongement from "./composants/prolongement"
import Message from "./composants/message"
function Espaceclient(){
    const [out,setout]=useState(false);
    const [prol,setprol]=useState(false);
    const [message,setmessage]=useState(false);
    const navigate=useNavigate();
    const onhundle=()=>{
        setprol(false);
        setmessage(true);
        setTimeout(()=>{
            setmessage(false)
        },4000)
    }
    return(<>
    {message && <Message />}
    {prol && <Prolongement close={()=>{setprol(false)}} onhundlesubmit={()=>{onhundle()}}/>}
    {out && <Ouinon sortir={()=>{navigate("/reservation")}} annuler={()=>{setout(false)}}/>}
    <div id="cheader">
        <div>
            <img src={account}/>
            <div>
                <hr/>
                <h1>Espace <span className="span">Client</span></h1>
                <p>9 mars 2026</p>
            </div>
        </div>
        <div>
            <button onClick={()=>{setout(true)}}><img src={logout}/>Se déconnecter</button>
            <button><img src={france}/>France<img src={arow}/></button>
        </div>
    </div>

    <div id="cbien">
        <h1>Bienvenue, M. Saadallah Reda, dans votre espace client.</h1>
        <h3>Depuis cet espace, vous pouvez consulter les informations relatives à votre réservation, suivre son état, accéder à vos documents et effectuer certaines demandes complémentaires.</h3>
    </div>
    <div id="client1">
        <div>
            <div>
                <h1>Mes informations</h1>
                <img src={infopers}/>
            </div>
            <div>
                <h3>Nom complet : SAADALLAH REDA</h3>
                <h3>CIN : BB203338</h3>
                <div><h3>Téléphone : 0625700603</h3><button><img src={pencil}/></button></div>
                <div><h3>Email : redasaadallah77@gmail.com</h3><button><img src={pencil}/></button></div>

            </div>
        </div>
        {/* ================================ */}
        <div>
            <div>
                <h1>Ma réservation</h1>
                <img src={about}/>
            </div>

            <div>
                <div><h3>Code de réservation : 5467345682</h3><h3>Durée de stockage : 50 jours</h3></div>
                <div><h3>Date d’entrée prévue : 01/04/2026</h3><h3>Date de sortie prévue : 20/05/2026</h3></div>
                <div><h3>Quantité : 1235 tonne</h3><h3>Prix totale : 12000 DHs</h3></div>


            </div>
        </div>
    </div>
    <div id="client2">
        <div>
            <div>
                <h1>Statut de la réservation</h1>
                <img src={updates}/>
            </div>
            <div>
                <div></div>
                <h3>Réservation acceptée</h3>
            </div>
            <p>Votre réservation commencera dans 2 jours.</p>
            <h3>Souhaitez-vous prolonger votre réservation ?</h3>
            <button onClick={()=>{setprol(true)}}>Demander un prolongement</button>
            <p>Vous pouvez envoyer une demande de prolongement avant la date de fin de votre réservation.</p>
        </div>
        {/* ============================== */}
        <div>
            <div>
                <h1>produits stockés  </h1>
                <img src={updates}/>
            </div>
            <div>
                <div>
                    <div><h3>Fromage(100 tonne)</h3></div>
                    <div>
                        <div>
                            <p>Facture</p>
                            <button><img src={openfile}/></button>
                        </div>
                        <div>
                            <p>Attestation ONSSA</p>
                            <button><img src={openfile}/></button>
                        </div>
                        <div>
                            <p>Registre de commerce (RC)</p>
                            <button><img src={openfile}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="recu">
        <div>
            <h3>Téléchargez le reçu de votre réservation.</h3>
            <button>Télécharger le reçu</button>
        </div>
        <p>Pour déposer vos produits, veuillez présenter votre reçu de réservation.</p>
    </div>
    <Footer/>
    </>)
}
export default Espaceclient;