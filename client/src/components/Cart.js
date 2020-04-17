import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Shipping from './Shipping'

function Cart(props) {

    // remove product from cart
    const handleRemove = (product) => {
        props.removeProduct(product);
    }
    // add quantity to cart
    const handleAddQuantity = (product) => {
        props.addQuantity(product);
    }
    // remove quantity from cart
    const handleRemoveQuantity = (product) => {
        props.removeQuantity(product);
    }
              
    let addedProducts = 
        props.products.length ?
        (  
            props.products.map(product=>{
                return(
                    
                    <li className="cart-product" key={product.id}>
                        <div className="product-img"> 
                            <img src={product.img} alt={product.artist + " - " + product.title} className=""/>
                        </div>
                    
                        <div className="product-desc">
                            <span className="title">{product.artist}</span>
                            <p>{product.title}</p>
                        </div>
                        <div className="product-quantity">
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleAddQuantity(product)}>
                                    arrow_drop_up
                                </i>
                            </Link>
                            <b>{product.quantity}</b> 
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleRemoveQuantity(product)}>
                                    arrow_drop_down
                                </i>
                            </Link>
                        </div>
                        <div className="product-price">
                            <b>{(Math.round((product.price*product.quantity)*100)/100)}€</b>
                        </div>
                        <div className="product-trash">
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleRemove(product)}>
                                    delete
                                </i>
                            </Link>
                        </div>
                        
                    </li>                        
                )
            })
        ):
        (
        <p>Votre panier est vide.</p>
        )

    const checkout = props.products.length ? 
        <div>
            <div className="row">
                <span className="right">Livraison offerte !</span>
                <br/>
                <span className="total-order right">Total : {(Math.round((props.total)*100)/100)}€
                </span>
            </div>
            <div className="row">
                <Shipping/>
            </div>
        </div>
    : null;

    return(
        <div>
            <section className="title-area">
                <div className="title-inner container center">
                    <h5 className="page-title center">Mon panier</h5>
                </div>
            </section>
            <main>
                <div className="container">                
                    <div className="cart">
                        {addedProducts}
                    </div> 
                    {checkout}
                </div>
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        products : state.cartProducts,
        total : state.cartTotal,
        address : state.address
    }
}

function mapDispatchToProps(dispatch) {

    return {
        removeProduct: function(product) { 
            dispatch( {type: 'REMOVE_ITEM', product: product} )
        },
        addQuantity: function(product) { 
            dispatch( {type: 'ADD_QUANTITY', product: product} )
        },
        removeQuantity: function(product) { 
            dispatch( {type: 'REMOVE_QUANTITY', product: product} )
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)