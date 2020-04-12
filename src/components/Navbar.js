import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Waxx Shop</Link>
                
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li>
                        <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                        <span className="cart-quantity">{props.cartQuantity}</span>
                    </li>
                </ul>
            </div>
        </nav>  
    )
}

function mapStateToProps(state) {
    return { 
        items : state.addedItems,
        cartQuantity: state.cartQuantity
    }
}

export default connect(
    mapStateToProps,
    null
  )(Navbar)