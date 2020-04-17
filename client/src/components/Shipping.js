import React, { useState } from 'react';
import { connect } from 'react-redux'

import Checkout from './Checkout'

function Shipping(props) {

    const [showForm, setShowForm] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [address, setAddress] = useState();

    const shippingForm = showForm ? 
        <div>
            <div className="shipping-form">
                <h5 className="center">Adresse de livraison et facturation</h5>
                <div className="row">
                    <div className="col s12 m6"> 
                        <input type="text" id="lastname" placeholder="Nom" onChange={(e)=> setLastname(e.target.value)} value={lastname} />
                    </div>

                    <div className="col s12 m6"> 
                        <input type="text" id="firstname" placeholder="Prénom" onChange={(e)=> setFirstname(e.target.value)} value={firstname} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        <input type="text" id="address" onChange={(e)=> setAddress(e.target.value)} value={address} placeholder="Adresse" />
                    </div>
                </div>
            </div>
            <div className="pay">
                <Checkout/>
            </div>
        </div>
      : null;
              
    return(
        <div className="checkout">
            <button 
                onClick={ () => {
                    setShowForm(true)
                    setDisabled(true)
                } }
                className="waves-effect waves-light btn-large"
                disabled={disabled}>
                Valider le panier
            </button>
            {shippingForm}
        </div>
    )
}


function mapStateToProps(state) {
    return { 
        products : state.addedProducts,
        total : state.total
    }
}

function mapDispatchToProps(dispatch) {

    return {
        addAddress: (firstname,lastname,address) => { 
            dispatch( {type: 'ADD_ADDRESS', firstname:firstname, lastname:lastname, address:address} )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Shipping)