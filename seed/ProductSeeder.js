const Product = require('../models/product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://shopping-cart:shopping-cart@shoppingcart-shard-00-00-tudhz.mongodb.net:27017,shoppingcart-shard-00-01-tudhz.mongodb.net:27017,shoppingcart-shard-00-02-tudhz.mongodb.net:27017/test?ssl=true&replicaSet=ShoppingCart-shard-0&authSource=admin&retryWrites=true');

const products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game 1!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_800/wv9fx5ijwvesdyx4mnmf.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Awesome Game 2!!!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/B7Y3DKLUqAQ/maxresdefault.jpg',
        title: 'Call of Duty Video Game',
        description: 'Awesome Game 3!!!!',
        price: 25.60
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}