let initState = {
    cartProducts:[],
    cartQuantity: 0,
    cartTotal: 0
}  

export default function(state = initState, action) {

    if (action.type === 'ADD_TO_CART') {

        let theProduct = action.product
        let existedProduct = state.cartProducts.find(product => theProduct.id === product.id)
        let newCartQuantity = state.cartQuantity + 1

        if(existedProduct)
        {
            existedProduct.quantity += 1 
            let newCartTotal = state.cartTotal + theProduct.price 
            return {
                ...state,
                cartTotal: newCartTotal,
                cartQuantity: newCartQuantity
            }
        }
         else {
            theProduct.quantity = 1
            let newCartTotal = state.cartTotal + theProduct.price 
            return {
                ...state,
                cartProducts: [...state.cartProducts, theProduct],
                cartTotal : newCartTotal,
                cartQuantity: newCartQuantity
            }  
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        let theProduct = action.product
        let newCartProducts = state.cartProducts.filter(product => theProduct.id !== product.id)
        let newCartQuantity = state.cartQuantity - theProduct.quantity
        let newCartTotal = state.cartTotal - (theProduct.price * theProduct.quantity)
        return {
            ...state,
            cartProducts: newCartProducts,
            cartTotal: newCartTotal,
            cartQuantity: newCartQuantity
        }
    }

    if (action.type === 'ADD_QUANTITY') {
        let theProduct = action.product
        theProduct.quantity += 1 
        let newCartTotal = state.cartTotal + theProduct.price
        let newCartQuantity = state.cartQuantity + 1
        return {
            ...state,
            cartTotal: newCartTotal,
            cartQuantity: newCartQuantity
        }
    }

    if (action.type === 'REMOVE_QUANTITY') {  
        let theProduct = action.product
        let newCartQuantity = state.cartQuantity - 1

        if(theProduct.quantity === 1){
            let newCartProducts = state.cartProducts.filter(product => product.id !== theProduct.id)
            let newCartTotal = state.cartTotal - theProduct.price
            return {
                ...state,
                cartProducts: newCartProducts,
                cartTotal: newCartTotal,
                cartQuantity: newCartQuantity
            }
        }
        else {
            theProduct.quantity -= 1
            let newCartTotal = state.cartTotal - theProduct.price
            return {
                ...state,
                cartTotal: newCartTotal,
                cartQuantity: newCartQuantity
            }
        }
    }

    if (action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            cartTotal: state.cartTotal + 6
        }
    }

    if (action.type === 'REMOVE_SHIPPING') {
        return {
            ...state,
            cartTotal: state.cartTotal - 6
        }
    }

return state
}