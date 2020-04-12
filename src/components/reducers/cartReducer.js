const initState = {
    items: [
        {
        id: '45645768',
        artist: 'Sufjan Stevens',
        title: 'Aporia : Limited Edition Yellow',
        img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fcNAqaAX/SharedImage-99424.png?t=f4e28053dd0dabc90f5c',
        desc: 'Aporia is a New Age album from Sufjan Stevens and his step-father and record label co-owner, Lowell Brams. In the spirit of the New Age composers who sanded off the edges of their synths’ sawtooth waves, Aporia approximates a rich soundtrack from an imagined sci-fi epic brimming with moody, hooky, gauzy synthesizer soundscapes. The album may suggest the progeny of a John Carpenter, Wendy Carlos, and Mike Oldfield marriage, but it stands apart from these touchstones and generates a meditative universe all its own. This is no mere curio in the Sufjan Stevens catalog - but a fully realized collaborative musical piece.',
        price: 24.99,
        stock: 14,
        label: 'Asthmatic Kitty',
        format: 'LP, Album',
        product_code: '10108198',
        release_date: '2020-03-27 00:00:00',
        date_added: '2020-04-10 08:00:00'
        },
        {
        id: '2342324',
        artist: 'The National',
        title: 'High Violet: 10th Anniversary Edition',
        img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fj0hZrEX/SharedImage-101432.png?t=520d1d6b768e84ec3494',
        desc: 'The National will be release a 10-year anniversary expanded edition of their 2010 album High Violet, on 19th June 2020. Originally released in May 2010, the critically acclaimed fifth studio album features the now-classics “Terrible Love”, “Bloodbuzz Ohio”, “England”, and perennial show closer, “Vanderlyle Crybaby Geeks.” In addition to the 10 original tracks, the triple LP package includes a third LP which includes tracks never before available on vinyl, including “Wake Up Your Saints,” an alternate version of “Terrible Love”, “Walk Off” and more.',
        price: 41.99,
        stock: 14,
        label: '4AD',
        format: 'Triple Vinyl LP',
        product_code: '4AD0244LPX',
        release_date: '2020-03-27 00:00:00',
        date_added: '2020-04-10 08:00:00'
        },
        {
        id: '987656',
        artist: 'Mac Demarco',
        title: 'Here Comes The Cowboy - Exclusive Coloured Vinyl',
        img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.f4yVdqCX/SharedImage-100617.png?t=c7ecbb779227be6514ca',
        desc: 'Hi, Mac Here. First off, thank you for listening to my new record. This one is my cowboy record. Cowboy is a term of endearment to me, I use it often when referring to people in my life. The rusty old grinning pin on the front and back covers of the record was purchased from a man in the mountains somewhere in the Nantahala National Forest between Chattanooga, TN and Asheville, NC. Where I grew up there are many people that sincerely wear cowboy hats and do cowboy activities, these aren’t the people I’m referring to. Before realizing that your surroundings don’t necessarily define who you are, I felt very uncomfortable in the company of that culture. This record was recorded in my garage during the first two weeks of January 2019. I played all the instruments, except for a little bit of keyboard here and there, which was played by my touring keyboard player, and friend for most o me life now, Alec Meen. My travelling sound man Yakitori Santar helped me track it and put it together as well. It was raining a lot in Los Angeles while we were recording, you can hear it tapping on the windows of the garage here and there if you listen closely.',
        price: 27,
        stock: 14,
        label: 'Caroline',
        format: 'LP, Album',
        product_code: '2812112942',
        release_date: '2020-03-27 00:00:00',
        date_added: '2020-04-10 08:00:00'
        },
        {
        id: '23476575',
        artist: 'Kurt Vile',
        title: 'Bottle It In: Blue Vinyl',
        img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fVctPIXW/SharedImage-84289.jpg?t=36ea8700de0b42549d3c',
        desc: 'Travel can inspire in surprising ways: Kurt Vile discovered as much making his first record in three years, the eclectic and electrifying Bottle It In, which he recorded at various studios around the country over two very busy years, during sessions that usually punctuated the ends of long tours or family road trips.',
        price: 21.99,
        stock: 14,
        label: 'Matador',
        format: 'Double Vinyl LP',
        product_code: 'OLE11468',
        release_date: '2020-03-27 00:00:00',
        date_added: '2020-04-10 08:00:00'
        }
    ],
    addedItems:[],
    itemDetails: null,
    cartQuantity: 0,
    total: 0
}  

export default function(state = initState, action) {

    if(action.type === 'ADD_TO_CART') {

        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        let newCartQuantity = state.cartQuantity + 1

        if(existed_item)
        {
            addedItem.quantity += 1 
            return{
                ...state,
                total: state.total + addedItem.price,
                cartQuantity: newCartQuantity
            }
        }
         else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                cartQuantity: newCartQuantity
            }  
        }

    }
    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newCartQuantity = state.cartQuantity - itemToRemove.quantity
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            cartQuantity: newCartQuantity
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === 'ADD_QUANTITY'){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        let newCartQuantity = state.cartQuantity + 1
        return{
            ...state,
            total: newTotal,
            cartQuantity: newCartQuantity
        }
    }

    if(action.type === 'REMOVE_QUANTITY'){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        let newCartQuantity = state.cartQuantity - 1
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                cartQuantity: newCartQuantity
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                cartQuantity: newCartQuantity
            }
        }
    }

    if(action.type === 'ITEM_DETAILS'){
        let itemDetails = state.items.find(item => item.id === action.id)
        return{
            ...state,
            itemDetails: itemDetails
        }
    }

    return state
  }