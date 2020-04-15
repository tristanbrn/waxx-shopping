import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import M from "materialize-css";

function Product(props) {

    const [product, setProduct] = useState([]);
    const [modalProduct, setModalProduct] = useState([]);

    useEffect( () => {

        const elems = document.querySelectorAll('.modal');
        let options = '';
        M.Modal.init(elems, options);   

        const productFetch = async () => {
            const data = await fetch(`/shop/${props.match.params.id}`, {
            method: 'GET'
            })
            const product = await data.json()
            setProduct(product[0])
        }
        productFetch()
    }, [props.match.params.id])

    const handleClick = (product) => {
        props.addToCart(product)
        setModalProduct(product)
    }

    return(
        <div>
            <section className="title-area">
                <div className="title-inner container center">
                    <h5 className="page-title center">{product.artist}</h5>
                </div>
            </section>
            <main>
                <div className="container product">
                    <div className="row">
                        <div className="col s12 m7"> 
                            <img src={product.img} width="100%" height="auto" alt={product.artist + " - " + product.title} />
                        </div>
                
                        <div className="col s12 m5 product-details"> 
                            <h1 className="title">{product.artist}</h1>
                            <h2 className="subtitle">{product.title}</h2>
                            <p className="price"><b>{product.price} €</b></p>

                            <a className="waves-effect waves-light btn-large modal-trigger" href="#modal1" onClick={()=> handleClick(product)}>Ajouter au panier</a>

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

                            <div className="product-ref">
                                <p><span>Format : </span>{product.format}</p>
                                <p><span>Label : </span>{product.label}</p>
                                <p><span>Ref : </span>{product.product_code}</p>
                            </div>
                        </div>
            
                    </div>
                    <div className="row">
                        <div className="col s12"> 
                            <p>{product.desc}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (product) => {dispatch({type: 'ADD_TO_CART', id:product.id, product: product})}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Product)