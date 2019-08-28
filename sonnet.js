let text = "Lab experiments to recreate what happens when asteroids hit the Earth show how these rocky objects could have transferred water to terrestrial rock in the intense heat of impact. Water covers 70 percent of the surface of Earth. It’s the source of life and home to countless living things. But where did it come from? Scientists have come up with many ways to account for Earth’s water. It could have been here from the start. It could have arrived with dirty ice balls called comets, or as part of interplanetary dust. And then there are asteroids, rock objects of varying sizes that have come crashing to Earth at different times in its history, sometimes in great numbers. More than four billion years ago they pummeled the planet in a period called the late bombardment. Even though samples of asteroids, in particular the kind called carbonaceous chondrites, show that they contained water, it seemed that the water would be lost in the intense heat of the impacts. But R. Terik Daly, now a researcher at the Johns Hopkins Applied Physics Laboratory, and Peter H. Schultz, a planetary scientist at Brown University, conducted experiments at a small scale that suggest that the water in asteroids could have been captured in Earth’s rock. Dr. Schultz said the results were surprising, “I’ve been doing this for 38 years, and what I’ve discovered is that every time we do an experiment, you think you know what’s going to happen, and it doesn’t happen that way.” The results were published in Science Advances. Dr. Daly, who was working on a doctorate at Brown, and Dr. Schultz, his adviser used NASA’s vertical gun, a three-story high apparatus designed to fire projectiles at a target at different angles. They shot pea-sized pebbles of a rock called antigorite, similar to the material of carbonaceous chondrites, at a small sample of pumice, meant to mimic a dry earth. The gun only had to shoot the pebbles about 10 feet, but at a speed of more than 11,000 miles per hour. At that speed the energy of the impact generated such heat that some of the water in the antigorite was vaporized, but it was absorbed by the melted pumice as it solidified and fused with bits of antigorite. At an impact angle of 45 degrees, for instance, about 30 percent of the water was captured by a glasslike substance and the mix of impact melt and rock fragments called breccia.If that happened with real asteroids, that water might later be liberated, for instance as steam from lava flows, and contribute to the conditions that made life on Earth possible. It wouldn’t account for all of Earth’s water, Dr. Schultz said, but it’s new information for a very important subject."

const rita = require('rita');
const newText = rita.stripPunctuation(text);
const sentences = rita.splitSentences(text);
const allWords = rita.tokenize(newText);
let count = 0;
const sonnet = document.getElementById("sonnet");

let lineA = [];
let lineA2 = [];
let lineB = [];
let lineB2 = [];

let lineC = [];
let lineC2 = [];
let lineD = [];
let lineD2 = [];

let lineE = [];
let lineE2 = [];
let lineF = [];
let lineF2 = [];

let lineG = [];
let lineG2 = [];

getWords();

function getWords() {
  for (let i = 0; i < allWords.length; i += 1) {
    for (let j = 0; j < allWords.length; j += 1) {
      const isRhyme = rita.isRhyme(allWords[i], allWords[j]);

      if (isRhyme) {
        tryRhyme(allWords[i], allWords[j]);
      }
    }
  }
}

function makeSentences(one, two, pair) {
  for (let a = 0; a < sentences.length; a++) {
    if (sentences[a].indexOf(one) >= 0) {
      const sen = sentences[a].substring(0, sentences[a].indexOf(one) + one.length);
      console.log("word a", one, sen, pair);
      if(pair === 1) {
        lineA.push(sen);
      }
      if (pair === 2) {
        lineB.push(sen);
      }
      if (pair === 3) {
        lineC.push(sen);
      }
      if (pair === 4) {
        lineD.push(sen);
      }
      if (pair === 5) {
        lineE.push(sen);
      }
      if (pair === 6) {
        lineF.push(sen);
      }
      if (pair === 7) {
        lineG.push(sen);
      }
    }
    if (sentences[a].indexOf(two) >= 0) {
      const sen = sentences[a].substring(0, sentences[a].indexOf(two) + two.length);
      console.log("word b", two, sen, pair);
      if(pair === 1) {
        lineA2.push(sen);
      }
      if (pair === 2) {
        lineB2.push(sen);
      }
      if (pair === 3) {
        lineC2.push(sen);
      }
      if (pair === 4) {
        lineD2.push(sen);
      }
      if (pair === 5) {
        lineE2.push(sen);
      }
      if (pair === 6) {
        lineF2.push(sen);
      }
      if (pair === 7) {
        lineG2.push(sen);
      }
    }
  }

  appendSentences();
}

function appendSentences() {
  const lineADiv = document.createElement("div");
  const lineAText = document.createTextNode(lineA[0]);
  const lineA2Div = document.createElement("div");
  const lineA2Text = document.createTextNode(lineA2[0]);
  const lineBDiv = document.createElement("div");
  const lineBText = document.createTextNode(lineB[0]);
  const lineB2Div = document.createElement("div");
  const lineB2Text = document.createTextNode(lineB2[0]);

  const lineCDiv = document.createElement("div");
  const lineCText = document.createTextNode(lineC[0]);
  const lineC2Div = document.createElement("div");
  const lineC2Text = document.createTextNode(lineC2[0]);
  const lineDDiv = document.createElement("div");
  const lineDText = document.createTextNode(lineD[0]);
  const lineD2Div = document.createElement("div");
  const lineD2Text = document.createTextNode(lineD2[0]);


  const lineEDiv = document.createElement("div");
  const lineEText = document.createTextNode(lineE[0]);
  const lineE2Div = document.createElement("div");
  const lineE2Text = document.createTextNode(lineE2[0]);
  const lineFDiv = document.createElement("div");
  const lineFText = document.createTextNode(lineF[0]);
  const lineF2Div = document.createElement("div");
  const lineF2Text = document.createTextNode(lineF2[0]);

  const lineGDiv = document.createElement("div");
  const lineGText = document.createTextNode(lineG[0]);
  const lineG2Div = document.createElement("div");
  const lineG2Text = document.createTextNode(lineG2[0]);

  if (lineA[0], lineA2[0], lineB[0], lineB2[0], lineC[0], lineC2[0], lineD[0], lineD2[0], lineE[0], lineE2[0], lineF[0], lineF2[0], lineG[0], lineG2[0]) {
    lineADiv.appendChild(lineAText);
    lineA2Div.appendChild(lineA2Text);
    lineBDiv.appendChild(lineBText);
    lineB2Div.appendChild(lineB2Text);

    lineCDiv.appendChild(lineCText);
    lineC2Div.appendChild(lineC2Text);
    lineDDiv.appendChild(lineDText);
    lineD2Div.appendChild(lineD2Text);

    lineEDiv.appendChild(lineEText);
    lineE2Div.appendChild(lineE2Text);
    lineFDiv.appendChild(lineFText);
    lineF2Div.appendChild(lineF2Text);

    lineGDiv.appendChild(lineGText);
    lineG2Div.appendChild(lineG2Text);

    sonnet.appendChild(lineADiv);
    sonnet.appendChild(lineBDiv);
    sonnet.appendChild(lineA2Div);
    sonnet.appendChild(lineB2Div);

    sonnet.appendChild(lineCDiv);
    sonnet.appendChild(lineDDiv);
    sonnet.appendChild(lineC2Div);
    sonnet.appendChild(lineD2Div);

    sonnet.appendChild(lineEDiv);
    sonnet.appendChild(lineFDiv);
    sonnet.appendChild(lineE2Div);
    sonnet.appendChild(lineF2Div);

    sonnet.appendChild(lineGDiv);
    sonnet.appendChild(lineG2Div);
  }
}

function tryRhyme(wordA, wordB) {
  if (count === 86) {
    makeSentences(wordA, wordB, 1);
  }
  if (count === 122) {
    makeSentences(wordA, wordB, 2);
  }
  if (count === 40) {
    makeSentences(wordA, wordB, 3);
  }
  if (count === 190) {
    makeSentences(wordA, wordB, 4);
  }
  if (count === 74) {
    makeSentences(wordA, wordB, 5);
  }
  if (count === 258) {
    makeSentences(wordA, wordB, 6);
  }
  if (count === 588) {
    makeSentences(wordA, wordB, 7);
  }
  count++
}

sonnet.classList.remove('machining');
