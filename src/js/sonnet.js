const text = "Lab experiments to recreate what happens when asteroids hit the Earth show how these rocky objects could have transferred water to terrestrial rock in the intense heat of impact. Water covers 70 percent of the surface of Earth. It’s the source of life and home to countless living things. But where did it come from? Scientists have come up with many ways to account for Earth’s water. It could have been here from the start. It could have arrived with dirty ice balls called comets, or as part of interplanetary dust. And then there are asteroids, rock objects of varying sizes that have come crashing to Earth at different times in its history, sometimes in great numbers. More than four billion years ago they pummeled the planet in a period called the late bombardment. Even though samples of asteroids, in particular the kind called carbonaceous chondrites, show that they contained water, it seemed that the water would be lost in the intense heat of the impacts. But R. Terik Daly, now a researcher at the Johns Hopkins Applied Physics Laboratory, and Peter H. Schultz, a planetary scientist at Brown University, conducted experiments at a small scale that suggest that the water in asteroids could have been captured in Earth’s rock. Dr. Schultz said the results were surprising, “I’ve been doing this for 38 years, and what I’ve discovered is that every time we do an experiment, you think you know what’s going to happen, and it doesn’t happen that way.” The results were published in Science Advances. Dr. Daly, who was working on a doctorate at Brown, and Dr. Schultz, his adviser used NASA’s vertical gun, a three-story high apparatus designed to fire projectiles at a target at different angles. They shot pea-sized pebbles of a rock called antigorite, similar to the material of carbonaceous chondrites, at a small sample of pumice, meant to mimic a dry earth.The gun only had to shoot the pebbles about 10 feet, but at a speed of more than 11,000 miles per hour. At that speed the energy of the impact generated such heat that some of the water in the antigorite was vaporized, but it was absorbed by the melted pumice as it solidified and fused with bits of antigorite. At an impact angle of 45 degrees, for instance, about 30 percent of the water was captured by a glasslike substance and the mix of impact melt and rock fragments called breccia.If that happened with real asteroids, that water might later be liberated, for instance as steam from lava flows, and contribute to the conditions that made life on Earth possible. It wouldn’t account for all of Earth’s water, Dr. Schultz said, but it’s new information for a very important subject."

const rita = require('rita');
const newText = rita.stripPunctuation(text);
const sentences = rita.splitSentences(text);
const allWords = rita.tokenize(newText);
let count = 0;
const sonnet = document.getElementById("sonnet");

let nodeOne;
let nodeTwo;
let nodeThree;
let nodeFour;

let senone;
let sentwo;
let senthree;
let senfour;

getWords();

function getWords() {
  for (let i = 0; i < allWords.length; i += 1) {
    for (let j = 0; j < allWords.length; j += 1) {
      const isRhyme = rita.isRhyme(allWords[i], allWords[j]);

      if(isRhyme) {
         if (count === Math.floor(Math.random() * 200 + 1) && allWords[i] !== allWords[j]) {
          nodeOne = allWords[i];
          nodeThree = allWords[j];
         }

         if (count === Math.floor(Math.random() * 200 + 1) && allWords[i] !== allWords[j]) {
           nodeTwo = allWords[i];
           nodeFour = allWords[j];
         }
         count++
      }

    }
  }
}


for (let a = 0; a < sentences.length; a++) {
  if (sentences[a].indexOf(nodeOne) >= 0) {
    const sen = sentences[a].substring(0, sentences[a].indexOf(nodeOne) + nodeOne.length);
    senone = document.createElement("div");
    var textsenone = document.createTextNode(sen);
    senone.appendChild(textsenone);
    console.log(senone);
  }

  if (sentences[a].indexOf(nodeTwo) >= 0) {
    const sen = sentences[a].substring(0, sentences[a].indexOf(nodeTwo) + nodeTwo.length);
    sentwo = document.createElement("div");
    var textsentwo = document.createTextNode(sen);
    sentwo.appendChild(textsentwo);
  }

  if (sentences[a].indexOf(nodeThree) >= 0) {
    const sen = sentences[a].substring(0, sentences[a].indexOf(nodeThree) + nodeThree.length);
    senthree = document.createElement("div");
    var textsenthree = document.createTextNode(sen);
    senthree.appendChild(textsenthree);
  }

  if (sentences[a].indexOf(nodeFour) >= 0) {
    const sen = sentences[a].substring(0, sentences[a].indexOf(nodeFour) + nodeFour.length);
    senfour = document.createElement("div");
    var textsenfour = document.createTextNode(sen);
    senfour.appendChild(textsenfour);
  }
}
// a
// b
// a
// b
sonnet.classList.remove('machining');
console.log(senone, sentwo, senthree, senfour);
sonnet.appendChild(senone);
sonnet.appendChild(sentwo);
sonnet.appendChild(senthree);
sonnet.appendChild(senfour);

// c
// d
// c
// d
//
// e
// f
// e
// f
//
// g
// g
