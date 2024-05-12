const myNum = [1, 2, 3];

// const myTotal = myNum.reduce( (acc, currval)=> {
//     console.log(`acc value ${acc} and currval is ${currval}`);
//     return acc + currval;
// },0 );

const myTotal = myNum.reduce((acc, currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'py course',
        price: 2999
    },
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'flutter course',
        price: 5999
    },
    {
        itemName: 'mern course',
        price: 3999
    },
    {
        itemName: 'mean course',
        price: 799
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);