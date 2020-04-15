import React, { useState } from 'react';
import { connect } from 'react-redux'

function Shipping(props) {

    const [checked, setChecked] = useState(null)

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    const handleChecked = (e) => {
        if(!checked){
            props.addShipping();
        } else {
            props.removeShipping();
        }
    }

    const shippingForm = checked ? 
        <div>
            <p>Adresse de livraison</p>
            <div className="row">
                <div className="col s12 m6"> 
                    <input type="text" id="lastname" placeholder="Nom" onChange={(e)=> setLastname(e.target.value)} value={lastname} />
                    <input type="text" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                </div>

                <div className="col s12 m6"> 
                    <input type="text" id="firstname" placeholder="Prénom" onChange={(e)=> setFirstname(e.target.value)} value={firstname} />
                    <input type="tel" id="phone" onChange={(e)=> setPhone(e.target.value)} value={phone} placeholder="Téléphone" />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12">
                    <input type="text" id="address" onChange={(e)=> setAddress(e.target.value)} value={address} placeholder="Adresse" />
                </div>
            </div>
        </div>
      : null;
              
    return(
        <div>
            <label>
                <input
                type="checkbox"
                    onChange={ e => { 
                        setChecked(e.target.checked)
                        handleChecked()
                    } }
                    checked={checked}
                />
                <span>Livraison (+6€)</span>
            </label>
            
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
        addShipping: () => { 
            dispatch( {type: 'ADD_SHIPPING'} )
        },
        removeShipping: () => { 
            dispatch( {type: 'REMOVE_SHIPPING'} )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Shipping)