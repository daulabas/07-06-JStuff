const d_age = 18;
let x_person = 
{
name:"Daulet", 
age:16, 
height:178, 
men:true,
smth: true
};
x_person.name = "Qazaq";
delete x_person.smth;
let food_list = ["Chicken", "Besh", "Limon", "Water"];
food_list = food_list.map(items => "Ilove" + items);
console.log(food_list);
food_list = food_list.filter(items => items != "IloveWater");
console.log(food_list)
const price_list = [10909, 29348, 3439049, 493049];
const sum = price_list.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(`sum is ${sum}`);
function sumx(x, y, z, d) {
  return x + y + z + d;
};
console.log(`again a sum ${sumx(...price_list)}`);
let a = price_list.slice();
console.log(a);
sum < 10000 ? console.log("Too much, sum is more than 10000") : console.log("not much, i can afford it");
if(sum == "3972355")
{
    console.log("sum equal to 3972355")
}
if(sum === "3972355")
{
    console.log("sum equal to 3972355")
}
else{console.log("strogoe sravneniyada otpeidi");}
for( i =0 ; i < price_list.length; i++)
{
    console.log(`This is will be if we add 2 to each price ${price_list[i] + 2}`);
}
let [firstname, lastname] =["Daulet", "Daulet"];
alert(firstname);
alert(lastname);