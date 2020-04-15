import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import M from "materialize-css";

function Shop(props) {

    const [products, setProducts] = useState([])
    const [modalProduct, setModalProduct] = useState([]);
    
    useEffect( () => {

        const elems = document.querySelectorAll('.modal');
        let options = '';
        M.Modal.init(elems, options);   

        const productsFetch = async () => {
            const data = await fetch('/products', {
            method: 'GET'
            })
            const products = await data.json()
            setProducts(products)
        }
        productsFetch()
    }, [])

    const handleClick = (product) => {
        props.addToCart(product);
        setModalProduct(product)
    }

    let productList = products.map(product => {
        return(
            <div className="card" key={product.id}>
                <div className="card-image">
                    <Link to={`/shop/${product.id}`}>
                        <img src={product.img} alt={product.artist + " - " + product.title} />
                    </Link>
                    <span className="card-title">{product.artist}</span>
                    
                    <Link to={`/shop/${product.id}`}>
                        <span className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">album</i></span>
                    </Link>
                </div>

                <div className="card-content">
                    <p>{product.title}</p>
                    <p className="price"><b>{product.price} €</b></p>
                    <a className="waves-effect waves-light btn-small modal-trigger" href="#modal1" onClick={()=> handleClick(product)}>Ajouter au panier</a>
                </div>
            </div>
            
        )
    })
    return(
        <div>
            <section className="title-area">
                <div className="title-inner container center">
                    <h5 className="page-title center">Boutique</h5>
                </div>
            </section>
            <main>
                <div className="container">
                    <div className="products-list">
                        {productList}
                    </div>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <h4>Produit ajouté avec succès !</h4>

                            <div className="modal-product " key={modalProduct.id}>
                                <div className="modal-product-img"> 
                                    <img src={modalProduct.img} alt={modalProduct.artist + " - " + modalProduct.title}/>
                                </div>
                            
                                <div className="modal-product-desc">
                                    <span className="title">{modalProduct.artist}</span>
                                    <p>{modalProduct.title}</p>
                                </div>
                                <div className="modal-product-price">
                                    <b>{modalProduct.price} €</b>
                                </div>
                                
                            </div> 

                        </div>
                        <div className="modal-footer">
                            <Link to="#!" className="modal-close waves-effect waves-green btn-flat">
                            Continuer mon shopping
                            </Link>
                            <Link to="/cart" className="modal-close waves-effect waves-light btn-small">
                            Voir mon panier
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function mapDispatchToProps(dispatch) {

    return {
        addToCart: function(product) { 
            dispatch( {type: 'ADD_TO_CART', product: product} )
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(Shop)