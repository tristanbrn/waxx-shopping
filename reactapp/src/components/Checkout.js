import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

const stripe = window.Stripe("pk_test_GulcKLsV3A3t88ZfkPDmPVmK00JylRPh2a");

const Checkout = (props) => {

    const [sessionId, setSessionId] = useState()

    useEffect(() => {

        const createSession = async () => {
            const data = await fetch('/payment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({cart:props.products})
            })
            const response = await data.json()
            setSessionId(response.id)
        }
        createSession()
    }, [props.products])

    const handleClick = e => {
        e.preventDefault();
        stripe.redirectToCheckout({
            sessionId: sessionId
        }).then(function (result) {
            console.log(result)
        });
    };

  return (
    <div className="checkout">
        <button 
            onClick={handleClick}
            className="waves-effect waves-light btn-large">
            Commander
        </button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return { 
        products : state.cartProducts,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addStripeSession: (sessionId) => {dispatch({type: 'ADD_STRIPE_SESSION', sessionId: sessionId})}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )
  (Checkout)