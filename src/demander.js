import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "./composants/loader";
import Header from "./composants/header";
import Main from "./composants/main";
import Upfooter from "./composants/upfooter";
import Footer from "./composants/footer";
import img3 from "./img/img3.jpg"
import "./styles/demander.css"
import add from "./img/add.png"
import addproduct from "./img/add-product.png"
import remove from "./img/close.png"
import img8 from "./img/img8.jpg"
import img9 from "./img/img9.jpg"
import img10 from "./img/img10.jpg"
import img11 from "./img/img11.jpg"

function Demander(){
    const navigate=useNavigate();
    const [show,setshow]=useState(0);
    useEffect(()=>{
                    setTimeout(()=>{
                        setshow(1);
                    },2000);
                },[]);
    return(<>
    {show===0?<Loader/>:<>
    <Header at={2} atphone={2} at1={2}/>
    <Main back={img3}/>
    {/* =================================== */}
    <div id="dem1">
        <h1>Réservez <span className="span">votre</span> espace <span className="span">frigorifique</span></h1>
        <h3>Remplissez le formulaire ci-dessous pour demander votre réservation.</h3>
        <h3>Notre équipe vous contactera rapidement pour confirmer la disponibilité.</h3>
    </div>
    <form id="dem2">
        <h1>Veuillez saisir les informations demandées.</h1>
        <div>
        <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Nom complet</span>
        </label>
        </div>
         <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>CIN</span>
        </label>
        </div>
         <div className="wave-group">
        <input required  type="email" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Email</span>
        </label>
        </div>
         <div className="wave-group">
        <input required  type="telephone" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Téléphone</span>
        </label>
        </div>
         <div className="reda">
        <label className='option'>Date de naissance :</label>
        <input required className="typeemprunt" type="date"  name="datenaissance"  />
        </div>
        <div className="wave-group">
        <input required  type="number" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Durée de stockage (jour)</span>
        </label>
        </div>
        <div>
            <p>Date de fin de votre stockage est : 28/03/2026</p>

        </div>
        </div>
        <div>
        <h3>Veuillez ajouter les produits que vous souhaitez stocker en indiquant, pour chacun, le nom du produit, la quantité correspondante ainsi que les documents associés.</h3>
         <div className="reda">
        <label className='option'>Nom du produit :</label>
        <select  className='filiereetu' name="marque"  >
            <option>Toyota</option>
            <option>Renault</option>
            <option>Peugeot</option>
            <option>Hyundai</option>

        </select>
        </div>
         <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}> Quantité (Tonne)</span>
        </label>
        </div>
        <h3>Veuillez joindre les documents suivants au format PDF</h3>
         <div>
         <div className="reda">
        <label className='option'>Facture :</label>
        <button type="button"   id="atphone"><img src={add}/></button>
        <input   accept="application/pdf" style={{ display: "none" }}  type="file"  />
        </div>
         <div className="reda">
        <label className='option'>Attestation ONSSA :</label>
        <button type="button"   id="atphone"><img src={add}/></button>
        <input   accept="application/pdf" style={{ display: "none" }}  type="file"  />
        </div>
         <div className="reda">
        <label className='option'>Registre de commerce (RC) :</label>
        <button type="button"   id="atphone"><img src={add}/></button>
        <input   accept="application/pdf" style={{ display: "none" }}  type="file"  />
        </div>
        </div>
        <div>
        <button><img src={addproduct}/>Ajouter</button>

        </div>
        </div>
        <div>
            <div><p>Beurre (2 tonne)</p><img src={remove}/></div>
        </div>
        <p>Totale : 20000 DHs</p>
        <button>Envoyer la demande</button>
    </form>
    {/* ============================================ */}
    <div id="dem3">
        <h1>Pourquoi réserver chez nous ?</h1>
        <div>
            <div>
            <div>
            <div></div>
            <p>Processus simple et rapide</p>
            <img src={img8}/>
            
            </div>
            <div>
            <div></div>
            <p>Confirmation rapide</p>
            <img src={img9}/>
            
            </div>
            </div>
            <div>
            <div>
            <div></div>
            <p>Conditions optimales de conservation</p>
            <img src={img10}/>
            
            </div>
            <div>
            <div></div>
            <p>Espaces adaptés à vos besoins</p>
            <img src={img11}/>
            
            </div>
            </div>
        </div>
    </div>
    <Upfooter/>
    <Footer/>
    </>}
    </>);
}
export default Demander;