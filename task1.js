//Question: For the given JSON iterate over all for loops (for,for in,for of,forEach)

let jsonBook = '{"title":"javaScript","author":"Bharath","pages":200,"price":1500,"ratings":4.5}'

let book = JSON.parse(jsonBook);
let keys = Object.keys(book);

//for loop

for (let index = 0; index < keys.length; index++){
    console.log(keys[index],':',book[keys[index]]);
}

//for in loop

for (let index in book) {
    console.log(index,':',book[index]);
}

//for of loop

for (let value of keys) {
    console.log(value,':',book[value]);
}

//forEach

keys.forEach(element => {
    console.log(element,':',book[element]);
});