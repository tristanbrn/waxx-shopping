import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import M from "materialize-css";

function Navbar(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
        var elems = document.querySelectorAll('.sidenav');
        let options = '';
        M.Sidenav.init(elems, options);
    }, [])

    return(
        <div>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/"><img src="https://waxx.herokuapp.com/logo.png" height="64px" width="auto" alt="Logo Waxx shop" /></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <i className="material-icons">shopping_cart</i>
                                    <span className="cart-quantity">{props.cartQuantity}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/cart">Panier</a></li>
            </ul> 
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        cartQuantity: state.cartQuantity
    }
}

export default connect(
    mapStateToProps,
    null
  )(Navbar)