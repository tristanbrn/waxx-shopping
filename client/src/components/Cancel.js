import React from 'react';
import { Link } from 'react-router-dom'

function Cancel() {

    return(
        <main>
            <div className="container center">
                <h4 className="page-title">Echec du paiement</h4>
                <p>Une erreur est survenue lors de votre commande. Veuillez réessayer.</p>     
                <Link to="/shop" className="waves-effect waves-light btn-large">Retour à la boutique</Link>
            </div>
        </main>
    )
}

export default (Cancel)