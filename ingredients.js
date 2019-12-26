const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let ii = 0;
while (ii < ingredients.length){
  console.log(ingredients[ii]);
  ii++;
}

// Write a for loop that prints out the contents of ingredients:
for (let jj = 0; jj < ingredients.length; jj++){
  console.log(ingredients[jj]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let kk = ingredients.length-1; kk >= 0; kk--){
  console.log(ingredients[kk]);
}
