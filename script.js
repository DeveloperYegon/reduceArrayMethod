const numbers = [1, 2, 3, 4, 5, 6];
        //Reducing the array to a single number
const total = numbers.reduce(sum, 0);
function sum(accumulator, item) {
    return accumulator + item;
}
console.log(total);

        //Determning the largest number in an array
const max=numbers.reduce(callback,-Infinity);
function callback(accumulator, item){
    if(accumulator>item){
        return accumulator;
    }else{
        return item;
    }
}
console.log(max);
        //calculating the total value of objects inside an array
const store=[{product:"laptop",price:20000, count:5},{product:"desktop",price:15000, count:15},{product:"cctv",price:10000, count:50}] 

const totalPrice= store.reduce((accumulator,item)=>accumulator + (item.price *item.count),0);
console.log(totalPrice);