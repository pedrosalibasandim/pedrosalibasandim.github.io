const subjects = [
  "A flying toaster",
  "My imaginary goldfish",
  "The confused astronaut",
  "A giant pancake",
  "Your neighbor's refrigerator",
  "The invisible duck",
  "An angry pineapple"
];

const verbs = [
  "dances with",
  "screams at",
  "secretly admires",
  "is running away from",
  "tries to explain quantum physics to",
  "throws glitter on",
  "can’t stop thinking about"
];

const complements = [
  "a potato wearing sunglasses",
  "the last slice of pizza",
  "a very suspicious cat",
  "a karaoke machine in space",
  "a wormhole full of spaghetti",
  "a rubber chicken army",
  "a confused time traveler"
];

const generateRandomMessage = () => {
    let subject = subjects[Math.floor(Math.random() * subjects.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let complement = complements[Math.floor(Math.random() * complements.length)];
    return `${subject} ${verb} ${complement}.`;
}

console.log(generateRandomMessage());