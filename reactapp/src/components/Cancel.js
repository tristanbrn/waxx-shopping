import React from 'react';
import { Link } from 'react-router-dom'

function Cancel() {

    return(
        <div>
            <section className="title-area">
                <div className="title-inner container center">
                    <h5 className="page-title center">Echec du paiement</h5>
                </div>
            </section>
            <main>
                <div className="container center">    
                    <p>Une erreur est survenue lors de votre commande. Veuillez réessayer.</p>
                    <Link to="/shop" className="waves-effect waves-light btn-large">Retour à la boutique</Link>
                </div>
            </main>
        </div>
    )
}

export default (Cancel)