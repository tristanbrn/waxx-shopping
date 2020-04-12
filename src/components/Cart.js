import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart(props) {

    //to remove the item completely
    const handleRemove = (id) => {
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id) => {
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleRemoveQuantity = (id) => {
        props.removeQuantity(id);
    }
              
    let addedItems = props.items.length ?
        (  
            props.items.map(item=>{
                return(
                    
                    <li className="collection-item" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.artist + " - " + item.title} className=""/>
                        </div>
                    
                        <div className="item-desc">
                            <span className="title">{item.artist}</span>
                            <p>{item.title}</p>
                        </div>
                        <div className="item-quantity">
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleAddQuantity(item.id)}>
                                    arrow_drop_up
                                </i>
                            </Link>
                            <b>{item.quantity}</b> 
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleRemoveQuantity(item.id)}>
                                    arrow_drop_down
                                </i>
                            </Link>
                        </div>
                        <div className="item-price">
                            <b>{(Math.round((item.price*item.quantity)*100)/100)}€</b>
                        </div>
                        <div className="item-trash">
                            <Link to="/cart">
                                <i className="material-icons"
                                onClick={()=> handleRemove(item.id)}>
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
    return(
        <div>
            <div className="container">
                <div className="cart">
                    <h5>Mon panier</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return { 
        items : state.addedItems
    }
}

function mapDispatchToProps(dispatch) {

    return {
        removeItem: function(id) { 
            dispatch( {type: 'REMOVE_ITEM', id: id} )
            console.log('removeItem : ' + id);
        },
        addQuantity: function(id) { 
            dispatch( {type: 'ADD_QUANTITY', id: id} )
            console.log('addQuantity : ' + id);
        },
        removeQuantity: function(id) { 
            dispatch( {type: 'REMOVE_QUANTITY', id: id} )
            console.log('removeQuantity : ' + id);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)