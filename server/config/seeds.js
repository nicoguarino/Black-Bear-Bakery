const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Cupcakes' },
        { name: 'Cookies' },
        { name: 'Cakes' },
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Sprinkle Explosion',
            description:
                'A white confetti cupcake with vanilla butter cream, chocolate drizzle, and sprinkles with a secret inside. Sold by the dozen.',
            image: 'sprinkle_explosion.jpg',
            category: categories[0]._id,
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Strawberry',
            description: 'Yellow cupcake with strawberry butter cream and fresh strawberries. Sold by the dozen.',
            image: 'strawberry_cupcake.jpg',
            category: categories[0]._id,
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Cinnamon Roll',
            category: categories[0]._id,
            description:
                'Cinnamon cupcake with cinnamon powdered vanilla butter cream along with a cinnamon stick. Sold by the dozen.',
            image: 'cinnamon_roll.jpg',
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Dirt & Worms',
            category: categories[0]._id,
            description:
                'Chocolate cupcake with oreo and gummy worm covered chocolate butter cream. Sold by the dozen.',
            image: 'dirt_worms.jpg',
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Cinnamon Apple Pie',
            category: categories[0]._id,
            description:
                'Vanilla cupcake topped with vanilla butter cream and baked apple bites. Sold by the dozen.',
            image: 'apple_pie.jpg',
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Pumpkin Chocolate Chip',
            category: categories[1]._id,
            description:
                'Succulent pumpkin cookies packed with chocolate chips. Sold by the dozen.',
            image: 'pumpkin_chocolate.jpg',
            price: 35.00,
            quantity: 500
        },
        {
            name: 'Cookies & Cream',
            category: categories[1]._id,
            description:
                'Chocolate cupcake with oreo and gummy worm covered chocolate butter cream. Sold by the dozen.',
            image: 'cookies_cream.jpg',
            price: 35.00,
            quantity: 500
        },
        {
            name: 'Oatmeal Chocolate Chip Surprise',
            category: categories[1]._id,
            description:
                'Oatmeal with chocolate chips with coconut &/or Walnuts. Sold by the dozen.',
            image: 'oatmeal.jpg',
            price: 35.00,
            quantity: 500
        },
        {
            name: 'Peanut Butter Explosion',
            category: categories[1]._id,
            description:
                'Peanut butter cookies with reeses pieces and chocolate drizzle. Sold by the dozen.',
            image: 'peanut_butter.jpg',
            price: 35.00,
            quantity: 500
        },
        {
            name: '4" Custom Cake',
            category: categories[2]._id,
            description:
                '4" custom cake that includes cake, frosting, and sprinkles. All cakes are 3 layers. Additional cost for fillings/toppers. Price set for base price.',
            image: '4_cake.jpg',
            price: 40.00,
            quantity: 500
        },
        {
            name: '6" Custom Cake',
            category: categories[2]._id,
            description:
                '6" custom cake that includes cake, frosting, and sprinkles. All cakes are 3 layers. Additional cost for fillings/toppers. Price set for base price.',
            image: '6_cake.jpg',
            price: 60.00,
            quantity: 500
        },
        {
            name: '8" Custom Cake',
            category: categories[2]._id,
            description:
                '8" custom cake that includes cake, frosting, and sprinkles. All cakes are 3 layers. Additional cost for fillings/toppers. Price set for base price.',
            image: '8_cake.jpeg',
            price: 80.00,
            quantity: 500
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Test',
        lastName: 'Testing',
        email: 'test@gmail.com',
        password: 'Test1234',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Group',
        lastName: 'Testing',
        email: 'group@gmail.com',
        password: 'group1234'
    });

    console.log('users seeded');

    process.exit();
});