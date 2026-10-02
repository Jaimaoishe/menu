// let amin =[1,2,3,4,5];
// amin.unshift(0)
//  console.log(amin);
// //  pop push end 

//  let name = "hi everyone"
//   console.log(name.toLocaleUpperCase ());
// //   new 
let userInput = "what is your name?";

function greetings() {
    if (userInput == "what is your name?") {
        let utterance = new SpeechSynthesisUtterance("I am Jaima");
        speechSynthesis.speak(utterance);
    }
}

greetings();

// new 
  

const orders = [
    { dish:"chicken", price:150, spicy:true, qty:1},
    { dish:"fish", price:250, spicy:true, qty:1},
    { dish:"vaji", price:30, qty:1},
    { dish:"vhorta", price:20,spicy:true, qty:1},
    { dish:"deserd", price:50, qty:1},




]
const myForeach = orders.forEach((orders, index) =>{
    console.table(`#${index + 1} : ${orders.qty}x ${orders.dish}`);
})

const myMap = orders.map((o)=> `${o.dish} : $${o.qty* o.price}`)
console.log(myMap);

const myFilter = orders.filter((o)=>o.spicy + o.price)
console.table(myFilter);