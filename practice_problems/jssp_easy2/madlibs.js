/*
Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
and injects them into a story that you create.

E.g.
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
*/

function madLib() {
  noun = prompt("Enter a noun: ");
  verb = prompt("Enter a verb: ");
  adjective = prompt("Enter an adjective: ");
  adverb = prompt("Enter an adverb: ");

  console.log("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "?")
  console.log("Good for you!");
}

// Using string interpolation:
console.log("Do you #{verb} your #{adjective} #{noun} #{adverb} ?");


madLib();


