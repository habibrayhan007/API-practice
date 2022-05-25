//JS object notation
//json
const user = {id:11, name:'Habib Rayhan', job:'Student'};
const stringified = JSON.stringify(user);
//console.log(user);
//console.log(stringified);

const shop = {
    name: 'Debugg',
    address: 'Road no 11',
    profit: 15000,
    products:['Software','Android App','Consultancy'],
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);