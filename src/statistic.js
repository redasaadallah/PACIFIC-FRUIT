import "./styles/statistic.css"
import Headeradmin from "./composants/headeradmin";
import Baradmin from "./composants/baradmin";
import csv from "./img/csv.png"
import garage from "./img/garage.png"
function Statistic(){
    function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
        const divs = [];
        const rows=[]
        for (let i = 0; i < 12; i++) {
  divs.push(
    <div key={i}>
      <p>314</p>
        <div style={{height:randint(1, 200)}}></div>
        <p>{i+1}</p>
    </div>
  );
}
for (let i = 0; i < 5; i++) {
  rows.push(
    <tr key={i}>
        <td>{i+1}</td>
        <td>Viande</td>
        <td>200 t</td>
        <td>45%</td>
    </tr>
  );
}

    return(<>
    <Baradmin/>
    <Headeradmin/>
    <div id="statistic1">
        <h1>Statistiques et rapports</h1>
        <button><img src={csv}/>Exporter en CSV</button>
        </div>
        <div id="statistic2">
            <div>
                <div>
                <div>
                    <div>
                        <p>Espace total</p>
                        <img src={garage}/>
                    </div>
                    <h1>10000 t</h1>
                    <div>
                        <h1>100%</h1>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div><h1>40%</h1><h1>60%</h1></div>
                    
                </div>
                </div>
                <div>
                <div>
                    <div>
                        <p>Espace total</p>
                        <img src={garage}/>
                    </div>
                    <h1>10000 t</h1>
                    <div>
                        <h1>100%</h1>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Espace total</p>
                        <img src={garage}/>
                    </div>
                    <h1>10000 t</h1>
                    <div>
                        <h1>100%</h1>
                        <div></div>
                    </div>
                </div>
                </div>
            </div>
            {/* statistic des demande progress bar */}
            <div>
                <h1>Statistiques des demandes clients</h1>
                <div>
                <div>
                    <div>
                        <h3>Nombre total de demandes</h3>
                        <hr/>
                    </div>
                    <h3>10324 (100%)</h3>
                </div>
                <div>
                    <div>
                        <h3>Nombre de demandes de réservation</h3>
                        <hr/>
                    </div>
                    <h3>10324 (100%)</h3>
                </div>
                <div>
                    <div>
                        <h3>Nombre de demandes de prolongation</h3>
                        <hr/>
                    </div>
                    <h3>10324 (100%)</h3>
                </div>
                </div>
                {/* ------------------------- */}
                <div>
                    <table>
                        <tr>
                            <td>
                                <div></div><h3>Demandes acceptées</h3>
                            </td>
                            <td>R 6435 (60%)</td>
                            <td>R 2156 (82%)</td>
                        </tr>
                        <tr>
                            <td>
                                <div></div><h3>Demandes acceptées</h3>
                            </td>
                            <td>R 6435 (60%)</td>
                            <td>R 2156 (82%)</td>
                        </tr>
                    </table>
                    <div>
                        <button>Mars 2026</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="statistic3">
            <div>
                <div>
                    <h3>Évolution du nombre de demandes en 2025</h3>
                    <div>
                        <button>demandes</button>
                        <button>2025</button>
                    </div>
                </div>
                <div>
                    
                        {divs}
                    
                </div>
            </div>
            {/* ========================================= */}
            <div>
                <h3>Répartition des produits stockés dans le frigo</h3>
                <table>
                    <tr>
                        <th>Rang</th>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Pourcentage</th>
                    </tr>
                    {rows}
                </table>
            </div>
        </div>
    

    </>);
}
export default Statistic;