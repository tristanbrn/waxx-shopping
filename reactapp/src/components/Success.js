import React from 'react';
import { connect } from 'react-redux'

function Success(props) {
       
    let addedProducts = 
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
                        <b>{product.quantity}</b> 
                    </div>
                    <div className="product-price">
                        <b>{(Math.round((product.price*product.quantity)*100)/100)}€</b>
                    </div>

                </li>                        
            )
        })

    return(
        <div>
            <section className="title-area">
                <div className="title-inner container center">
                    <h5 className="page-title center">Paiement validé</h5>
                </div>
            </section>
            <main>
                <div className="container">   
                    <p>Votre commande est en route ! Voici votre récapitulatif :</p>             
                    <div className="cart">
                        {addedProducts}
                    </div> 
                </div>
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        products : state.cartProducts,
        total : state.cartTotal
    }
}

export default connect(
    mapStateToProps,
    null
  )(Success)