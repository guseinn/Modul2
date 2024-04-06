                                  //////////Tapşırıqlar//////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////1.Tapşırıq

function reverseArray(massiv) {
    return massiv.reverse();
}
const massiv = [1, 2, 3, 4, 5];
console.log(`Düzgün Massiv: ${massiv}`);
const reversedArray = reverseArray(massiv);
console.log(`Tərsinə massiv: ${reversedArray}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////2.Tapşırıq

let aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(aliens) {
  for (let i = 0; i < aliens.length; i++) {
    console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
  }
}

greetAliens(aliens);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////3.Tapşırıq

function justCoolStuff(massiv1, massiv2) {
    return massiv1.filter(item => massiv2.includes(item));
  }
  
  const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];
  
  console.log(justCoolStuff(myStuff, coolStuff));

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////4.Tapşırıq

function isTheDinnerVegan(meal) {
    for (let i = 0; i < meal.length; i++) {
      if (meal[i].source != "plant") {
        return false;
      }
    }
    return true;
  }
  let meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  let dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
  ];
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));