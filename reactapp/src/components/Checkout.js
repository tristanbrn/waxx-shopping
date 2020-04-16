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
            console.log(response)
        }
        createSession()
    }, [props.products])

    const handleClick = e => {
        e.preventDefault();
        stripe.redirectToCheckout({
            sessionId: sessionId
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

function mapStateToProps(state) {
    return { 
        products : state.cartProducts,
    }
}

export default connect(
    mapStateToProps,
    null
  )
  (Checkout)