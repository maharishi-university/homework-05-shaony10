import { Meditation } from "./excercise01";
import { testIsPrime, testIsPrimeAsync } from "./excercise02";
import { DataResponse } from "./excercise03";

///// Excercise 01 testing
/*
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
*/

///// Excercise 02 testing
/*
console.log("Using Promise \n")
console.log('start');
testIsPrime(7);
console.log('end');
*/

/*
console.log("Using Async/Await \n")
console.log('start');
testIsPrimeAsync(7);
console.log('end');
*/

///// Excercise 03 testing

(async () => {
    try {
        const rawResponse: Response = await fetch('https://dummyjson.com/recipes');
        const jsonBody: DataResponse = await rawResponse.json();

        const recipes = jsonBody.recipes;
        console.log(`Recipes Names:--------`);
        recipes.forEach(recipe => {
            console.log(`  ${recipe.name}`);
        });

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }

})();


