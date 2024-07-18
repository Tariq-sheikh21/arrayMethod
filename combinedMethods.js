const products = [
    {name: 'Laptop', price: 1000, category: 'Electronics'},
    {name: 'Mobile', price: 500, category: 'Electronics'},
    {name: 'Shirt', price: 300, category: 'Clothes'},
    {name: 'Shoes', price: 100, category: 'Clothes'},
];

// filter products to get only electronics 
const electronics = products.filter(product => product.category === 'Electronics');

//map to get prices of electronics
const prices = electronics.map(product => product.price);


//Reduce to get total price of electronics
const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log(`Total Prices of Electronics : $${totalPrice}`);


//forEach to log the electronics
electronics.forEach((product, index) =>{
    console.log(`${index + 1}. $${product.name} - $${product.price}`);
})