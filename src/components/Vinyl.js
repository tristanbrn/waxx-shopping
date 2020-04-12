import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Vinyl(props) {

    const handleClick = (id) => {
        props.addToCart(id); 
    }

    return(
    <div>        
        <div className="parallax-container">
            <img src="bg.jpg" alt="Waxx Shop" />
        </div>
        <div className="main container vinyl">
            <div className="row">

                <div className="col s12 m6"> 
                    <img src={props.vinyl.img} width="100%" height="auto" alt={props.vinyl.artist + " - " + props.vinyl.title} />
                </div>
        
                <div className="col s12 m6 vinyl-details"> 
                    <h1 className="vinyl-artist">{props.vinyl.artist}</h1>
                    <h2 className="vinyl-title">{props.vinyl.title}</h2>
                    <p className="vinyl-price"><b>{props.vinyl.price} €</b></p>
                    <Link to="/cart" className="waves-effect waves-light btn-large"
                    onClick={()=> handleClick(props.vinyl.id)}>
                        <i className="material-icons left">shopping_cart</i>
                        Ajouter au panier
                    </Link>

                    <div className="vinyl-ref">
                        <p><span>Format : </span>{props.vinyl.format}</p>
                        <p><span>Label : </span>{props.vinyl.label}</p>
                        <p><span>Ref : </span>{props.vinyl.product_code}</p>
                    </div>
                </div>
    
            </div>
            <div class="row">

                <div class="col s12"> 
                    <p>{props.vinyl.desc}</p>
                </div>
    
            </div>
        </div>
    </div>

    )
}

function mapStateToProps(state) {
    return { 
        vinyl : state.itemDetails
    }
}

function mapDispatchToProps(dispatch) {

    return {
        addToCart: function(id) { 
  
          dispatch( {type: 'ADD_TO_CART', id: id} )
  
          console.log('addToCart : ' + id);
  
      }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Vinyl)