// var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// var isMidnight = true;
// var isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return 'were' + species;
// }

// var i;
// for (i = 0; i < species.length; i++) {
//   var thisSpecies = species[i];
//   var newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//       newSpecies = transform(thisSpecies);
//       console.log('Beware of the ' + newSpecies + '!');
//   }
// }

var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var newSpecies = [];
var i;
var j;

for (i = 0; i < species.length; i++) {
  if (isMidnight && isFullmoon && isTransformable(species[i])) {
      newSpecies.push(transform(species[i]));
  }
}

for (j = 0; j < newSpecies.length; j++) {
  console.log('Beware of the ' + newSpecies[j] + '!');
}