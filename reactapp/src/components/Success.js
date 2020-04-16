import React from 'react';
import { Link } from 'react-router-dom'

function Success() {

    return(
        <main>
            <div className="container center">
                <h4 className="page-title">Paiement validé</h4>
                <p>Votre commande est en route. Merci beaucoup !</p>     
                <Link to="/shop" className="waves-effect waves-light btn-large">Retour à la boutique</Link>
            </div>
        </main>
    )
}

export default (Success)