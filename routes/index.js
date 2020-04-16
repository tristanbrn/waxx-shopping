var express = require('express');
var router = express.Router();

const stripe = require('stripe')('sk_test_LvGNnhmgeY6OgPgS563FGdvs00q0KN3bPG');

const database = [
  {
    id: '87987774',
    artist: 'Miles Davis',
    title: 'Miles In Tokyo: Limited Edition Red Vinyl',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.f_UeqVAX/SharedImage-99366.png?t=88ed82bf5e4952136ac0',
    desc: 'Miles Davis was on the verge of forming one of his most acclaimed ensembles in 1964. It was this year that he travelled to perform in Japan for the first time, bringing with him 3/4ths of the musicians that would form his famed ""second great quartet""; Herbie Hancock on piano, Ron Carter on double bass, and Tony Williams on drums. In addition the jazz legend brought along saxophonist Sam Rivers to replace the recently exited George Coleman. Davis and Rivers never developed any major chemistry and frequently found their distinct styles frequently clashing (or perhaps dueling) in their performances. Rivers would ultimately be dismissed from the group at the end of their trip, leading to the arrival of Wayne Shorter, and the inception of the second great quintet. The partnership of Miles Davis and Sam Rivers may have been short-lived, but it did produce the live album Miles In Tokyo.',
    price: 31.99,
    stock: 14,
    label: 'Get On Down',
    format: 'LP, Album',
    product_code: 'GET51452LP',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00',
    new:true
  },
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
  date_added: '2020-04-10 08:00:00',
  new:true
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
  date_added: '2020-04-10 08:00:00',
  new:true
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
  date_added: '2020-04-10 08:00:00',
  new:true
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
  },
  {
    id: '09765884',
    artist: 'Weezer',
    title: 'Blue album',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fVtm14FX/SharedImage-101967.jpg?t=bb86dff30af6dbeb08dd',
    desc: 'Few bands emerged as fully formed as Weezer, the Southern California band that would quickly shake the world with its reimagined vision of rock ‘n’ roll. With 17 million albums sold worldwide, and two LPs on Rolling Stone’s list of most influential ever made, the L.A. quartet helmed by singer-guitarist Rivers Cuomo proved to be as popular as they are pioneering. Weezer’s music continues to shape the sound of rock to this day, well after the release of its first album, the triple-platinum Weezer (The Blue Album), one of rock’s most auspicious debuts.',
    price: 9.99,
    stock: 14,
    label: 'UMC / Geffen',
    format: 'Vinyl LP',
    product_code: '4794539',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '2438875',
    artist: 'Marvin Gaye',
    title: 'What\'s Going On',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.f-JrKrEX/SharedImage-101431.png?t=bda1679a8b649df42f12',
    desc: 'Remastered reissue of Marvin Gaye’s iconic album from 1971. Pressing on 180 gram vinyl, housed in a gatefold sleeve.',
    price: 17.99,
    stock: 14,
    label: 'UMC',
    format: 'Vinyl LP',
    product_code: '5353423',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '239686485',
    artist: 'Bob Marley',
    title: 'Legend',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fuwnX6EX/SharedImage-101563.jpg?t=92843f9fba023ef808c3',
    desc: 'Legend, Bob Marley’s posthumously released hits collection, was originally issued on Tuff Gong in 1984. It features 14 of Bob Marley’s most popular singles, including ‘Is This Love’, ‘No Woman, No Cry’, ‘Could You Be Loved’, ‘Buffalo Soldier’, ‘Get Up, Stand Up’ and ‘I Shot the Sheriff’. With sales in excess of 20 million copies, Legend is rightly described by Q as "The definitive hits collection, reggae\'s all-time best seller”, as well as being the second longest-charting album in Billboard magazine (just behind Pink Floyd’s Dark Side Of The Moon), serving as a perfect introduction to Bob Marley’s career.',
    price: 18.99,
    stock: 14,
    label: 'UMC-Island',
    format: 'Vinyl LP',
    product_code: '5303052',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '9868723',
    artist: 'N.W.A',
    title: 'Straight Outta Compton: 25th Anniversary Edition',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fsffjcEX/SharedImage-101352.png?t=941a873eeb9e2f845ffc',
    desc: 'Straight Outta Compton is the debut studio album from American hip hop group N.W.A, released August 8, 1988. The album is widely regarded as the pioneering record of gangsta rap; and with its ever-present profanity and violent lyrics, it helped to give birth to the then-new sub-genre of hip hop. Includes the global smash hit singles ‘Straight Outta Compton’, ‘Express Yourself’ and ‘Gangsta Gangsta’.',
    price: 17.99,
    stock: 14,
    label: 'UMC',
    format: 'Vinyl LP',
    product_code: '5346995',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '09982774',
    artist: 'Caribou',
    title: 'Suddenly: Black Vinyl With High Gloss Sleeve',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fNXmw_7W/SharedImage-98011.png?t=1ae9c24c808debd2ab58',
    desc: 'In 2014 Dan Snaith aka Caribou released Our Love to overwhelming critical acclaim and massive fan support. Now Caribou returns with his seventh studio album Suddenly, an album about family and the changes we go though as those relationships evolve. Suddenly is the most surprising and unpredictable Caribou album to date. Though it retains the trademark Caribou warmth and technicolour, this album is littered with swerves and left turns, and amazes with it’s yet unheard nuances, samples and hooks.',
    price: 21.99,
    stock: 14,
    label: 'City Slang',
    format: 'Vinyl LP',
    product_code: 'SLANG50247LP',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '98794623',
    artist: 'Tame Impala',
    title: 'Currents',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fxZyWe9V/SharedImage-76850.png?t=16e11b40f6cb44d9ae7b',
    desc: 'Much has changed since Tame Impala first emerged with an EP of dusty home recordings in 2008. By and large Kevin Parker’s approach to recording has not, though the sound coming out of his home studio has vastly expanded, as has the number of people anticipating the fruits of his labour. Tame Impala’s third album is titled Currents, and on it Parker addresses a blindingly colourful panorama of transition in the most audacious, adventurous fashion he’s yet to capture on record.',
    price: 29.00,
    stock: 14,
    label: 'Fiction Records',
    format: 'Double Vinyl LP',
    product_code: '4730677',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  },
  {
    id: '98794623',
    artist: 'Thomas Newman',
    title: '1917: Limited Edition Translucent Green Vinyl',
    img: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fq1z6E-W/SharedImage-98370.png?t=6a8241c951f28809ef8a',
    desc: 'At the height of the First World War, two young British soldiers, Schofield (Captain Fantastic\'s George MacKay) and Blake (Game of Thrones Dean-Charles Chapman) are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake\'s own brother among them. The music to the movie is composed by Thomas Newman (The Shawshank Redemption, American Beauty, Road to Perdition). Newman has received a whopping 14 Oscar bids throughout his career, and this new epic score is already nominated for an Oscar and Hollywood Critics Association Award. Since the film is designed to be told in one continuous shot from cinematographer Roger Deakins, Newman\'s pulse-pounding score often serves as a unique form of editing. The music cuts off during dramatic cues, ramps up in battle scenes and, in one breathtaking moment, becomes almost operatic as MacKay runs through war ruins to escape being seen from enemy flares.',
    price: 33.99,
    stock: 14,
    label: 'Music On Vinyl',
    format: 'Double Vinyl LP',
    product_code: 'MOVATM273C',
    release_date: '2020-03-27 00:00:00',
    date_added: '2020-04-10 08:00:00'
  }
]

/* GET products list */
router.get('/products', function(req, res, next) {

  let products = database;
  
  res.json(products);
});

/* GET new products list for homepage */
router.get('/new-products', function(req, res, next) {

  let products = database.filter(product => product.new === true);
  
  res.json(products);
});

/* GET product details */
router.get('/shop/:id_product', function(req, res, next) {

  let product = database.filter(product => product.id === req.params.id_product);

  res.json(product);
});

/* GET payment */
router.post('/payment', async function(req, res) {

  let cart = req.body.cart;

  let newCart = [];

  let createCart = cart.map((item) => {
    newCart.push(
      {
        name: item.title,
        description: item.artist,
        images: [item.img],
        amount: item.price*100,
        currency: 'eur',
        quantity: item.quantity
      }
    )
  })

  console.log(newCart)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: newCart,
    success_url: 'http://localhost:3001/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3001/cancel',
  });
  res.json(session)

});


module.exports = router;
