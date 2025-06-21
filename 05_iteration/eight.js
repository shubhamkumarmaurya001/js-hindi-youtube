//reduce

const mynum=[1,2,3];

// const mytotal= mynum.reduce(function(acc,cur_val){
//     console.log(`accumulator :${acc} & current value: ${cur_val}`);
//     return acc+cur_val;
// },0);
// console.log(mytotal);

//by arrow function use reduce
// const mytotal= mynum.reduce((acc,cur_val)=>acc+cur_val,0);
// console.log(mytotal);


//example
const shoppingCart=[
    {
        itemname:"js-course",
        price:2999
    },
    {
        itemname:"python-course",
        price:3999
    },
    {
        itemname:"java-course",
        price:5999
    },
    {
        itemname:"Data science-course",
        price:12999
    },
];

const pricetopay =shoppingCart.reduce((acc,item)=> acc + item.price,0);
console.log(pricetopay);