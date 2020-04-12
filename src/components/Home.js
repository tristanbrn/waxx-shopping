import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home(props) {

    const handleClick = (id) => {
        props.addToCart(id); 
    }

    const handleClickItemDetails = (id) => {
        props.itemDetails(id);
    }

    let itemList = props.items.map(item => {
        return(
            <div className="card" key={item.id}>
                <Link to="/vinyl" onClick={()=> handleClickItemDetails(item.id)}>
                    <div className="card-image">
                        <img src={item.img} alt={item.artist + " - " + item.title} />
                        <span className="card-title">{item.artist}</span>
                        <Link to="/vinyl" 
                        onClick={()=> handleClickItemDetails(item.id)}>
                            <span className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">album</i></span>
                        </Link>
                    </div>
                </Link>

                <div className="card-content">
                    <Link to="/vinyl" onClick={()=> handleClickItemDetails(item.id)}><p>{item.title}</p></Link>
                    <p className="item-price"><b>{item.price} €</b></p>
                    <Link to="/" className="waves-effect waves-light btn-small btn-add-to-cart"
                    onClick={()=> handleClick(item.id)}>
                        <i className="material-icons left">shopping_cart</i>
                        Ajouter au panier
                    </Link>
                </div>
            </div>
        )
    })
    return(
        <div>
            <div className="parallax-container">
                <img src="bg.jpg" alt="Waxx Shop" />
            </div>
            <div className="main container">
                <h4 className="center">Sélection</h4>
                <div className="box">
                    {itemList}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        items : state.items
    }
}

function mapDispatchToProps(dispatch) {

    return {
        addToCart: function(id) { 
            dispatch( {type: 'ADD_TO_CART', id: id} )
            console.log('addToCart : ' + id);
        },
        itemDetails: function(id) { 
            dispatch( {type: 'ITEM_DETAILS', id: id} )
            console.log('itemDetails : ' + id);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)