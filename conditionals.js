const raining = false;

if (raining) {
  console.log("Don't forget your umbrella!");
} else {
console.log("leave your umbrella at home!");}


const temperature = 42;
let stayIndoors = false

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…")
stayIndoors=true;
}else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
if (!stayIndoors){console.log("Now you're ready to go outside!");}



