// function calculateTotal(number) {
  
  // let total = 0;
  // for (let i= 0; i < number.length; i += 1){
  //   console.log(number[i]);
  //   total += number[i];
  // }
  // console.log(total);



  
  
//  for (let i= 0; i <= number; i += 1 ){
//   console.log(i);
//    a += i;
//  }
 
//  console.log(a);
//  return;
 
   
//  }
//  calculateTotal(3)
//  calculateTotal([12, 85, 37, 4])






// const minb = 500;
// const maxb = 1500;
// const a = 5;
// let c = 0;
// for (let i = 1; i < a; i += 1){
//   // const s = Math.random(Math.random()* (maxb - minb)+ minb);
//   console.log(`зп ${i} b `);
//  c += i;
//  console.log(c);
// }



// function findLongestWord(string) {
// const a = string.split(" ");
// console.log(a);
//   let b = 0;
//   let c = " ";

// for (let i=0; i < a.length; i += 1) {
//   console.log(a[i])
//    if (a[i].length > b){
//     b = a[i].length;
//     c = a[i];

//    }
  
// }
// console.log(b);
// console.log(c);
//   return;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i+=1){
//     // console.log(i);
//     numbers.push(i)
//     console.log(numbers)
//   }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(29, 34)

// // возвращает [29, 30, 31, 32, 33, 34]


// function filterArray(numbers, value) {
//   const a = [];
//   if (numbers)
// for (let i=0; i<numbers.length; i++){
//   console.log(numbers[i]);
  
//   if (numbers[i] > value) {
//     numbers[i] = a.push(numbers[i]);
//   } 
// } 


// console.log(a);
// return a;
// }

// filterArray([1, 2, 3, 4, 5], 3) 
// возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) 
// // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) 
// // возвращает []
// filterArray([12, 24, 8, 41, 76], 38) 
// // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) 
// // возвращает [24, 41, 76]
// filterArray() 
// со случайным массивом и числом возвращает правильный массив


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
  
//   return; // Change this line
// }
// checkFruit(["apple", "plum", "pear", "orange"])


// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false


// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const a = [];
//  for (let i = 0; i < array1.length; i++){
//   //  console.log(array1[i]);
//   //  console.log(array2[i]);
//    if (array2.includes(array1[i])){
//     a.push(array1[i]);
//    }
//  }
//   console.log(a);
//   return;
 
// }


//  getCommonElements([1, 2, 3, 4], [2, 4]) 
//  возвращает [2]
//  getCommonElements([1, 2, 3], [2, 1, 17, 19]) 
//  возвращает [1, 2]
//  getCommonElements([24, 12, 27, 3, 1], [12, 8, 3, 36, 27]) 
//  возвращает [12, 27, 3]
//  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) 
//  возвращает [10, 30, 40]
//  getCommonElements([1, 2, 3], [10, 20, 30]) 
//  возвращает []
//  getCommonElements() 
//  со случайными двумя массивами возвращает правильный массив



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const orde of order){
//     total += orde;
//   }
     
  
//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]) 
// возвращает 138





// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }
//   for (const number of numbers){
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) 
// // возвращает [4, 5]


// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const a = [];
  
// for (let i = start; i <= end; i += 1){
//   console.log(i);
//  if(i % 2 === 0){
//    a.push(i)
//  }
// }

// console.log(a);
// return;
//    // Change code above this line
//  }
//  getEvenNumbers(3, 11) 
// //  возвращает [4, 6, 8, 10]

// function includes(array, value) {
//   // Change code below this line
  
// for (let arra of array){
//   if (arra === value){
//     console.log(true);
//   } 
  
//  }
//  console.log(false);
//  return;
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3)


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// 


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { };
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// apartment.owner.name = "982-126-1588"
// // Change code below this line
// console.log(apartment);
// console.log(apartment.owner.name)


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// console.log("------------------");
// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]:"henry.carter@aptmail.com",
// [passwordInputName]:"jqueryismyjam",


//   // Change code above this line
// };
// console.log(credentials);


// function countProps(object) {
//   // let a = [];
  
//   const keys = Object.keys(object)
//   let propCount = keys.length;
//   // Change code below this line
  
//   // console.log(object.age)
//   // Change code above this line
//   console.log(propCount);
//   // return propCount;
// }


 
// countProps({}) 
// // возвращает 0
 
// countProps({ name: "Mango", age: 2 }) 
// // возвращает 2
 
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) 
// // возвращает 3

// function calculateTotalPrice(order) {
//   let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   let a = order[i];
  //   total += a;
  // }
//   for (const orde of order){
//     total += orde; 
//   }
//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = [];
// for(const key of Object.keys(apartment)){
//   values.push(apartment[key]);
//   keys.push(key);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const a = Object.keys(object);
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   // console.log(propCount);
//   console.log(a.length);

//   return propCount;
//   // Change code above this line
// }


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   let a = Object.keys(object)
//   // console.log(a);
//   for (const key of a){
//     // console.log(a.includes(key));
//     if (a.includes(key)) {
//           propCount += 1;
//       }
    

//   }
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     // propCount += 1;
//   //   }
//   // }
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 })


// const start = 6;
// const end = 26;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;

//   } else console.log("не делится")
// }
// console.log(number);



// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   // Change code below this line
//   for(const salarie of values){
//     console.log(salarie);
//     totalSalary += salarie;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) 
// возвращает 330

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors){
//   // console.log(color.hex);
//   // let a = color.hex;
//   hexColors.push(color.hex);
//   // rgbColors += color.rgb;
//   // console.log(Object.values(color));
//   // rgbColors += Object.values(color);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
 
// for (const product of products){
//   if (product.name === productName){
//   console.log (product.price);
//   return product.price;
// }
// }
// console.log(null);
// return null;


// }
// getProductPrice("Radar") 
// // возвращает 1300.
// getProductPrice("Grip") 
// // возвращает 1200.
// getProductPrice("Sfffcanner") 
// // возвращает 2700.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
  

// const a = [];



// for (const product of products){
//   // console.log(product);
//   for (const p in product){
//     // console.log(p);
//     if (p === propName){
//       a.push(product[propName]);
//     }
//   }
//     // a.push(product[propName]);
  
    
//   }
  
  
      

// console.log(a);
// return a;

//   // Change code above this line
// }
// getAllPropValues("name") 
// // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") 
// // // возвращает [4, 3, 7, 9]
// getAllPropValues("price") 
// // // возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category") 
// // возвращает []

// console.log('---------------------------');

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let b = 0;
//   for (const product of products){
   
//     if (product.name === productName){
//       b = product.price * product.quantity; 
     
//     }
//   }

//   console.log(b);
 
// }
// calculateTotalPrice("Blaster") 
// // возвращает 0
// calculateTotalPrice("Radar") 
// // // возвращает 5200
// calculateTotalPrice("Droid") 
// // // возвращает 2800
// calculateTotalPrice("Grip") 
// // // возвращает 10800
// calculateTotalPrice("Scanner") 
// // возвращает 8100

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// console.log('----------------------------');



// function makeTask(data) {
  
//   const first = { completed: false, category: "General", priority: "Normal" };
  
//   const third = {...first, ...data };
//   console.log(third);
//   // const b = {...a};
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
//   // console.log(data); 
//   return ;
// }
 

// makeTask({}) 
// // возвращает { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
// // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }) 
// // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }) 
// // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }) 
// // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }


// console.log('----------------------------');
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third);


// function add(...args) {
//   // Change code above this line
//   let a = 0;
//   for (const arg of args){
//     a += arg;
//   }
//   console.log(a);
//   return;
// }

// add(15, 27) 
// // возвращает 42
// add(12, 4, 11, 48) 
// // возвращает 75
// add(32, 6, 13, 19, 8) 
// // возвращает 78
// add(74, 11, 62, 46, 12, 36) 
// // возвращает 241



// function findMatches([...first], ...args) {
//   const matches = []; // Don't change this line
  


//   for (let i = 0; i < args.length; i++){
//        console.log(args[i]);
//        console.log(first[i]);
//        if (first.includes(args[i])){
//         matches.push(args[i]);
//        }
//       }
//   // Change code above this line
//   console.log(matches);
//   return matches;

  
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
// // возвращает [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) 
// // возвращает [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) 
// // возвращает [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) 
// // возвращает []


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const a = this.books.indexOf(oldName);
//     const b = this.books.splice(a, 1, newName);
//     // Change code below this line


// return bookShelf;
//     // Change code above this line
//   },
// };


// const atTheOldToad = {
//   // Change code below this line
// potions: [],

//   // Change code above this line
// };
// console.log(atTheOldToad.potions);


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions(){
//   return this.potions;
//   },
//   // Change code below this line

//   // Change code above this line
// };
// console.log(atTheOldToad.potions);
// console.log(getPotions);

// atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// atTheOldToad.getPotions это метод объекта
// atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]






// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   // Change code below this line
//   getPotions() {
//     // console.log(this.potions);
//     return this.potions;
    
//   },

//   addPotion (newPotion) {
//     const a = this.potions;
    
//     for (const potion of a){
        
//       if (potion.name === newPotion.name){
//         console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//       console.log(newPotion);
    
  
  



    // if (this.potions.includes(newPotion)) {
    //   console.log(`Error! Potion ${newPotion} is already in your inventory!`);
    //   return `Error! Potion ${newPotion} is already in your inventory!`;
    // }
    // console.log(newPotion);
    // this.potions.push(newPotion);
    // console.log(this.potions);
//   },

//   removePotion(potionName) {

    
//     for (let i = 0; i < this.potions.length; i++){
//         console.log(this.potions[i].name);
//         console.log(potionName);
//       if (this.potions[i].name === potionName){
//         this.potions.splice(i, 1);
//       }
      
//     }
//     console.log(`Potion ${potionName} is not in inventory!`)
//         return `Potion ${potionName} is not in inventory!`;
//   },
    
// 	//   removePotion(potionName) {
//   //     const {potions} = this;

//   //     for (let i = 0; i < potions.length; i += 1) {
//   //       console.log(i);
//   // //       console.log(potionName);
//   //       if (potionName === potions[i].name) {

//   //       potions.splice(i, 1);
//   //       }

//   //     }
//   //     console.log(`Potion ${potionName.name} is not in inventory!`)
//   // return `Potion ${potionName} is not in inventory!`;
//   //   },



    
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
  
//   updatePotionName(oldName, newName) {

//     for (const potion of this.potions){
//       console.log(potion.name);
//       if(potion.name === oldName) {
//         potion.name = newName
//       }
//     }


//   //   for(const potion of this.potions) {
//   //     if (potion['name'] === oldName) {
//   // potion['name'] = newName;
//   //     }
//   //  }

//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
// },
// };

// // Для исходного объекта после вызова метода 
// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })
// // // , в массиве `potions` последним элементом будет этот объект

// // // right answer
// // // Для исходного объекта после вызова метода `
// // atTheOldToad.addPotion({ name: 'Power potion', price: 270 })
// // //  в массиве `potions` последним элементом будет этот объект

// // // right answer
// // // Для исходного объекта вызов `
// // atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })
// // `, возвращает строку `'Error! Potion Stone skin is already in your inventory!'`.

// // right answer
// // Для исходного объекта вызов `
// // atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })
// // `, возвращает строку `'Error! Potion Dragon breath is already in your inventory!'`.

// // right answer
// // Для исходного объекта после вызова метода `
// // atTheOldToad.removePotion('Dragon breath')
// // // `, в свойстве `potions` будет массив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`

// // // right answer
// // // Для исходного объекта после вызова метода `
// // atTheOldToad.removePotion('Speed potion')
// // // `, в свойстве `potions` будет массив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`

// // // right answer
// // // Для исходного объекта после вызова метода `
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// // // `, в свойстве `potions` будет массив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`

// // // right answer
// // // Для исходного объекта после вызова метода `
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// // // `, в свойстве `potions` будет массив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`













// Для исходного объекта вызов 
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })
// // , возвращает строку `'Error! Potion Stone skin is already in your inventory!'`.


// // Для исходного объекта после вызова метода 
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// // , в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// // Для исходного объекта после вызова метода 
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// , в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]




// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
//   se: "adfgdfgdfgpt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// apartment.pre = 2144553;
// // console.log(apartment);

// for (const key in apartment) {
//   // Change code below this line
//   console.log(key);
//   console.log(apartment.hasOwnProperty(key));
//   if(apartment.hasOwnProperty(key)){
    
//   keys.push(key);
//   values.push(apartment[key]);
//   // console.log(apartment[key]);
//   }
//   // Change code above this line
// }




// function countProps(object) {

//   // Change code below this line
//   const a = Object.values(object)
//   let propCount = a.length;
//   // Change code above this line
//   console.log(a);
//   console.log(propCount);
//   return propCount;
  
// }


// countProps({ name: "Mango", age: 2, mail: "poly@mail.com", isOnline: true, score: 500 }) 
// // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// // возвращает 3


// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// const scores = [61, 619, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]



// // Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   console.log(callback)
//   callback(name);
// }

// registerGuest("Mango", greet);




// function deliverPizza(pizzaName) {
//   console.log(`Delivering ${pizzaName} pizza.`);
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   console.log(callback);
//   callback(pizzaName);
//   return;
// }

// makeMessage("Royal Grand", makePizza) 
// // возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza) 
// // возвращает строку "Delivering Ultracheese pizza."
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)){
//       console.log(onSuccess(pizzaName));
//       return onSuccess(pizzaName);
//     }
//     console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys){
//   console.log(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]);
//   // console.log(values);
// }

// // const values = Object.values(apartment);
// console.log(values);


// function makeTask(data) {

//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";

//   const a = {category: "General", priority: "Normal", completed: false,
//   };
//   const b = {...a, ...data};
//   // Change code below this line

//   // Change code above this line
//   console.log(b);
// }

// makeTask({}) 
// // возвращает { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
// // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }) 
// // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }) 
// // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }) 
// возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }




// function countProps(object) {
//   // Change code below this line
  
//   const a = Object.keys(object)
//   let propCount = a.length;
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }

// countProps({}) 
// // возвращает 0
// countProps({ name: "Mango", age: 2 }) 
// // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// //  возвращает 3



// function findMatches(first, ...args) {
//   const matches = []; // Don't change this line
//   // console.log(args);
//   // console.log(first);
// for (let i = 0; i < args.length; i++){
//       //  console.log(args[i]);
//       //  console.log(first[i]);
//        if (first.includes(args[i])){
//         matches.push(args[i]);
//        }
//       }
//   // Change code above this line
//   console.log(matches);
//   // return matches;
// }



// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
// // возвращает [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) 
// // возвращает [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) 
// // возвращает [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) 
// // возвращает []


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)){
//       console.log(onSuccess(pizzaName));
//       return onSuccess(pizzaName);
//     }
//     console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line
// "Error! There is no pizza with a name Big Mike in the assortment."
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function(number, index){
//     totalPrice += number;
//     // console.log(number);
//     // console.log(index);
//   });
//   // Change code above this line
//   console.log(totalPrice);
//   return totalPrice;
// }


// calculateTotalPrice([12, 85, 37, 4]) 
// // возвращает 138
// calculateTotalPrice([164, 48, 291])
// //  возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]) 
// // возвращает 1116


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }
// numbers.forEach(function(number, index){
//   if(number > value){
//     console.log(number);
//     filteredNumbers.push(number);
//   }
// });
//   // Change code above this line
//   console.log(filteredNumbers)
//   return filteredNumbers;
// }


// filterArray([1, 2, 3, 4, 5], 3) 
// // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) 
// // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) 
// // возвращает []
// filterArray([12, 24, 8, 41, 76], 38) 
// // /возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) 
// // /возвращает [24, 41, 76]




//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });

//     // return totalPrice;
//   }
//   // Change code above this line
//   // calculateTotalPrice.forEach(orderedItems);



// calculateTotalPrice([12, 85, 37, 4]) 
// // // возвращает 138
// calculateTotalPrice([164, 48, 291]) 
// // // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// // //  возвращает 1116


// // const numbers = [5, 10, 15, 20, 25];

// // // Объявление функции
// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });

// // // Анонимная стрелочная функция
// // numbers.forEach((number, index) => {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });
// // const numbrs = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbrs.forEach(logMessage);


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// console.log(makePizza)


// function changeEven(numbers, value) {
//   // Change code below this line
//   const a = [];
//   numbers.forEach( (number) => 
//   {number % 2 === 0 ? a.push(number + value) : a.push(number);}

 
// );
    
//   console.log(a);

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //     console.log(numbers[i])
//   //   }
//   // }
//   // Change code above this line
// }


// changeEven([1, 2, 3, 4, 5], 10)
// //  возвращает новый массив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10) 
// // возвращает новый массив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100) 
// // возвращает новый массив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100) 
// // возвращает новый массив [144, 13, 81, 192, 136, 154]


// const planets = [5, 4, 6, 6];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet);
// console.log(planetsLengths);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const a = planets.map(planet => planet);
// console.log(planets);
// console.log(a);

// const planetsLengths = [5, 4, 5, 7];
// const b = planetsLengths.map(planet => planet);

// console.log(b);
// console.log(planetsLengths);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];



// const getUserNames = users => {
    
//   console.log(users.map(user => user.name));
//   // console.log(a)
//     };

// const getUserNames = users => {
    
//   return users.map(user => user.name);
//     };
//     


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getUsersWithFriend = (users, friendName) => {
//   // console.log(users.filter(user => user.friends.includes(friendName)));
//   return users.filter(user => user.friends.find(user => user === friendName));

//  };

//  console.log(getUsersWithFriend(users, "Briana Decker"))


// const getFriends = (users) => {
//   const a = users.flatMap (user => user.friends);
//   console.log(a)
//   const b = a.filter((users, index, array) => { return array.indexOf(users) === index});
//   console.log(b)
// };

// console.log(getFriends(users, "Briana Decker"))

// const getActiveUsers = (users) => {
//   const a = [];
//   users.filter((user) =>{ user.isActive
//   if (user.isActive){
//     a.push(user.name)
//   } })
//   console.log(a)
// };

// getActiveUsers(users)


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   console.log(total + player.playtime / player.gamesPlayed)
//   // console.log(a)
//   return (total + player.playtime / player.gamesPlayed)
// },0);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const calculateTotalBalance = users => {
//   const a = users
//   .map(value => value.balance)
//   .reduce((acc, item) => {

//     console.log (acc + item)
//     return acc + item;

// }, 0);
//   ;
//   console.log (a);
  
// };

// const getTotalFriendCount = users => {
//   return users.reduce((acc, item) => {
//        return acc + item.friends.length
//           }, 0);
// };
// getTotalFriendCount(users)



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstStudent, secondStudent) =>
//   firstStudent.author.localeCompare(secondStudent.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstStudent, secondStudent) =>
//   secondStudent.author.localeCompare(firstStudent.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstStudent, secondStudent) => firstStudent.rating - secondStudent.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstStudent, secondStudent) => secondStudent.rating - firstStudent.rating
// );
// console.log (sortedByAuthorName);
// console.log (sortedByReversedAuthorName);
// console.log (sortedByAscendingRating);
// console.log (sortedByDescentingRating);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const sortByDescendingFriendCount = users => {
//   const c = 
  // users
  // .flatMap (user => user.name)
  // .filter((course, index, array) => array.indexOf(course) === index)
  // .sort((a,b) => a.localeCompare(b));

  
  // .map(friend => friend.name)
  // .sort((a,b) => a.localeCompare(b))

//   [...users].sort((a,b) => a.name.localeCompare(b.name))
//   console.log(c)
// };
// sortByDescendingFriendCount(users)

// const sortByDescendingFriendCount = users => {
//   const c = [...users].sort((a,b) => a.friends.length - b.friends.length);
  
//   console.log(c)
// };
// sortByDescendingFriendCount(users)



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
// .filter(value => value.rating > MIN_BOOK_RATING)
// .map(user => user.author)
// .sort((a,b) => a.localeCompare(b))
// ;
// console.log(names);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // const getNamesSortedByFriendCount = users => {
// //   const a = [...users].sort((a,b) => a.friends.length - b.friends.length)
// //   .map(user => user.name)
// //   ;
// //   console.log(a)
// // };

// // getNamesSortedByFriendCount(users);

// const getTotalBalanceByGender = (users, gender) => {
//   const a = 
//   users
//   .filter ( user => user.gender === gender) 
//   .reduce((acc, item) => acc+item.balance,0)
//   console.log(a)
// };
// getTotalBalanceByGender(users, "female")


// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this);
//   },
// };

// petya.showName();

// function foo() {
//   console.log(this);
// }

// foo();

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     // console.log(this.books)
//     return this.books;
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     this.books.push(bookName);
//     console.log(this.books)
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
//   // console.log(this.books)
// };

// // Вызовы методов
// // bookShelf.getBooks();
// console.log(bookShelf.getBooks())
// // bookShelf.addBook("Новая книга");
// console.log(bookShelf.addBook("The Las"))
// console.log(bookShelf.addBook("Thfgdge Las"))
// console.log(bookShelf.addBook("Thdfgdfgdfgdfe Las"))
// console.log(bookShelf.addBook("Thdfgdfgdfgde Las"))


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
  
// let a = [];
// for (const product of products){
//   // console.log(product);
//   for (const p in product){
//     // console.log(p);
//     console.log(product[p]);
//     console.log(propName);
//     if (p === propName){
//       a.push(product[propName]);
//     }
//   }
//     // a.push(product[propName]);
  
    
//   }
  
// // console.log(a);
// return a;
// }

// getAllPropValues("name") 
// возвращает ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") 
// возвращает [4, 3, 7, 9]
// getAllPropValues("price") 
// возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category") 
// возвращает []



// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// class Storage{
//   constructor (items) {
//     this.items = items
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(newItem){
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//     this.items = this.items.filter((item) => item !== itemToRemove);
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder{
//   constructor (value){
//       this.value = value;
//   }
//   getValue(){
//     return this.value;
//   }
//   padEnd(str){
//     this.value += str;
//   }
//   padStart(str){
//     this.value = str + this.value;
//   }
//   padBoth(str){
//   this.value = str + this.value + str;
  
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^."
// builder.padStart("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price){
    
//    return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"
//     // if (price > Car.#MAX_PRICE){
//     //   return "Error! Price exceeds the maximum";
//     // }
//     // return "Success! Price is within acceptable limits"
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
  
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel,blacklistedEmails = []  }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
// blacklist(email){
//   this.blacklistedEmails.push(email);
// }
// isBlacklisted(email){
//   return this.blacklistedEmails.every(value => value === email);
// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true