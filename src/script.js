import "./index.html";
import "./style.css";

import ancientsData from "./data/ancients.js";
import greenCardsData from "./data/mythicCards/green/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import blueCardsData from "./data/mythicCards/blue/index.js";

const state = {
  ancient: "",
  difficulty: "",
  firstStage: [],
  secondStage: [],
  thirdStage: [],
};

const ancients = document.querySelectorAll(".ancient");
const difficultyItem = document.querySelectorAll(".difficulty-item");
const shirt = document.querySelector(".shirt");
const card = document.querySelector(".card");
const stages = document.querySelectorAll(".stage");
const firstStageNumbers = document.querySelectorAll(".first-stage-number");
const secondStageNumbers = document.querySelectorAll(".second-stage-number");
const thirdStageNumbers = document.querySelectorAll(".third-stage-number");
const shuffle = document.querySelector(".shuffle");

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function getIndexOfAncient() {
  switch (state.ancient) {
    case "azathoth":
      return 0;
    case "cthulhu":
      return 1;
    case "iogSothoth":
      return 2;
    case "shubNiggurath":
      return 3;
  }
}

function getEasyCards(cardsData) {
  let cards = [];
  cardsData.forEach((el) => {
    if (el.difficulty === "easy") {
      cards.push(el);
    }
  });
  return cards;
}

function getNormalCards(cardsData) {
  let cards = [];
  cardsData.forEach((el) => {
    if (el.difficulty === "normal") {
      cards.push(el);
    }
  });
  return cards;
}

function getHardCards(cardsData) {
  let cards = [];
  cardsData.forEach((el) => {
    if (el.difficulty === "hard") {
      cards.push(el);
    }
  });
  return cards;
}

function getShuffle() {
  state.firstStage = [];
  state.secondStage = [];
  state.thirdStage = [];
  card.style.backgroundImage = "none";
  shirt.classList.remove("shirt-deactive");
  let indexOfAncient = getIndexOfAncient();
  let ancient = ancientsData[indexOfAncient];
  let sumOfGreenCards =
    ancient.firstStage.greenCards +
    ancient.secondStage.greenCards +
    ancient.thirdStage.greenCards;
  let sumOfBlueCards =
    ancient.firstStage.blueCards +
    ancient.secondStage.blueCards +
    ancient.thirdStage.blueCards;
  let sumOfBrownCards =
    ancient.firstStage.brownCards +
    ancient.secondStage.brownCards +
    ancient.thirdStage.brownCards;
  let easyCardsGreen = getEasyCards(greenCardsData);
  let normalCardsGreen = getNormalCards(greenCardsData);
  let hardCardsGreen = getHardCards(greenCardsData);
  let easyCardsBrown = getEasyCards(brownCardsData);
  let normalCardsBrown = getNormalCards(brownCardsData);
  let hardCardsBrown = getHardCards(brownCardsData);
  let easyCardsBlue = getEasyCards(blueCardsData);
  let normalCardsBlue = getNormalCards(blueCardsData);
  let hardCardsBlue = getHardCards(blueCardsData);
  let greenCards = [];
  let brownCards = [];
  let blueCards = [];
  stages.forEach((el) => el.classList.remove("stage-remove"));

  if (state.difficulty === "veryEasy") {
    while (greenCards.length < sumOfGreenCards) {
      let randomNum = getRandomNum(0, easyCardsGreen.length - 1);
      if (!greenCards.includes(easyCardsGreen[randomNum])) {
        greenCards.push(easyCardsGreen[randomNum]);
      }
      if (
        greenCards.length >= easyCardsGreen.length &&
        greenCards.length < sumOfGreenCards
      ) {
        let randomNum = getRandomNum(0, normalCardsGreen.length - 1);
        if (!greenCards.includes(normalCardsGreen[randomNum])) {
          greenCards.push(normalCardsGreen[randomNum]);
        }
      }
    }

    while (brownCards.length < sumOfBrownCards) {
      let randomNum = getRandomNum(0, easyCardsBrown.length - 1);
      if (!brownCards.includes(easyCardsBrown[randomNum])) {
        brownCards.push(easyCardsBrown[randomNum]);
      }
      if (
        brownCards.length >= easyCardsBrown.length &&
        brownCards.length < sumOfBrownCards
      ) {
        let randomNum = getRandomNum(0, normalCardsBrown.length - 1);
        if (!brownCards.includes(normalCardsBrown[randomNum])) {
          brownCards.push(normalCardsBrown[randomNum]);
        }
      }
    }

    while (blueCards.length < sumOfBlueCards) {
      let randomNum = getRandomNum(0, easyCardsBlue.length - 1);
      if (!blueCards.includes(easyCardsBlue[randomNum])) {
        blueCards.push(easyCardsBlue[randomNum]);
      }
      if (
        blueCards.length >= easyCardsBlue.length &&
        blueCards.length < sumOfBlueCards
      ) {
        let randomNum = getRandomNum(0, normalCardsBlue.length - 1);
        if (!blueCards.includes(normalCardsBlue[randomNum])) {
          blueCards.push(normalCardsBlue[randomNum]);
        }
      }
    }
  }

  if (state.difficulty === "easy") {
    let selectedCards = [];
    for (let i = 0; i < greenCardsData.length; i++) {
      if (greenCardsData[i].difficulty !== "hard") {
        selectedCards.push(greenCardsData[i]);
      }
    }
    while (greenCards.length < sumOfGreenCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!greenCards.includes(selectedCards[randomNum])) {
        greenCards.push(selectedCards[randomNum]);
      }
    }

    selectedCards = [];
    for (let i = 0; i < brownCardsData.length; i++) {
      if (brownCardsData[i].difficulty !== "hard") {
        selectedCards.push(brownCardsData[i]);
      }
    }
    while (brownCards.length < sumOfBrownCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!brownCards.includes(selectedCards[randomNum])) {
        brownCards.push(selectedCards[randomNum]);
      }
    }

    selectedCards = [];
    for (let i = 0; i < blueCardsData.length; i++) {
      if (blueCardsData[i].difficulty !== "hard") {
        selectedCards.push(blueCardsData[i]);
      }
    }
    while (blueCards.length < sumOfBlueCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!blueCards.includes(selectedCards[randomNum])) {
        blueCards.push(selectedCards[randomNum]);
      }
    }
  }

  if (state.difficulty === "normal") {
    while (greenCards.length < sumOfGreenCards) {
      let randomNum = getRandomNum(0, greenCardsData.length - 1);
      if (!greenCards.includes(greenCardsData[randomNum])) {
        greenCards.push(greenCardsData[randomNum]);
      }
    }

    while (brownCards.length < sumOfBrownCards) {
      let randomNum = getRandomNum(0, brownCardsData.length - 1);
      if (!brownCards.includes(brownCardsData[randomNum])) {
        brownCards.push(brownCardsData[randomNum]);
      }
    }

    while (blueCards.length < sumOfBlueCards) {
      let randomNum = getRandomNum(0, blueCardsData.length - 1);
      if (!blueCards.includes(blueCardsData[randomNum])) {
        blueCards.push(blueCardsData[randomNum]);
      }
    }
  }

  if (state.difficulty === "hard") {
    let selectedCards = [];
    for (let i = 0; i < greenCardsData.length; i++) {
      if (greenCardsData[i].difficulty !== "easy") {
        selectedCards.push(greenCardsData[i]);
      }
    }
    while (greenCards.length < sumOfGreenCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!greenCards.includes(selectedCards[randomNum])) {
        greenCards.push(selectedCards[randomNum]);
      }
    }

    selectedCards = [];
    for (let i = 0; i < brownCardsData.length; i++) {
      if (brownCardsData[i].difficulty !== "easy") {
        selectedCards.push(brownCardsData[i]);
      }
    }
    while (brownCards.length < sumOfBrownCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!brownCards.includes(selectedCards[randomNum])) {
        brownCards.push(selectedCards[randomNum]);
      }
    }

    selectedCards = [];
    for (let i = 0; i < blueCardsData.length; i++) {
      if (blueCardsData[i].difficulty !== "easy") {
        selectedCards.push(blueCardsData[i]);
      }
    }
    while (blueCards.length < sumOfBlueCards) {
      let randomNum = getRandomNum(0, selectedCards.length - 1);
      if (!blueCards.includes(selectedCards[randomNum])) {
        blueCards.push(selectedCards[randomNum]);
      }
    }
  }

  if (state.difficulty === "veryHard") {
    while (greenCards.length < sumOfGreenCards) {
      let randomNum = getRandomNum(0, hardCardsGreen.length - 1);
      if (!greenCards.includes(hardCardsGreen[randomNum])) {
        greenCards.push(hardCardsGreen[randomNum]);
      }
      if (
        greenCards.length >= hardCardsGreen.length &&
        greenCards.length < sumOfGreenCards
      ) {
        let randomNum = getRandomNum(0, normalCardsGreen.length - 1);
        if (!greenCards.includes(normalCardsGreen[randomNum])) {
          greenCards.push(normalCardsGreen[randomNum]);
        }
      }
    }

    while (brownCards.length < sumOfBrownCards) {
      let randomNum = getRandomNum(0, hardCardsBrown.length - 1);
      if (!brownCards.includes(hardCardsBrown[randomNum])) {
        brownCards.push(hardCardsBrown[randomNum]);
      }
      if (
        brownCards.length >= hardCardsBrown.length &&
        brownCards.length < sumOfBrownCards
      ) {
        let randomNum = getRandomNum(0, normalCardsBrown.length - 1);
        if (!brownCards.includes(normalCardsBrown[randomNum])) {
          brownCards.push(normalCardsBrown[randomNum]);
        }
      }
    }

    while (blueCards.length < sumOfBlueCards) {
      let randomNum = getRandomNum(0, hardCardsBlue.length - 1);
      if (!blueCards.includes(hardCardsBlue[randomNum])) {
        blueCards.push(hardCardsBlue[randomNum]);
      }
      if (
        blueCards.length >= hardCardsBlue.length &&
        blueCards.length < sumOfBlueCards
      ) {
        let randomNum = getRandomNum(0, normalCardsBlue.length - 1);
        if (!blueCards.includes(normalCardsBlue[randomNum])) {
          blueCards.push(normalCardsBlue[randomNum]);
        }
      }
    }
  }

  createCardList(ancient, greenCards, blueCards, brownCards);
  changeNumbers();
}

function createCardList(ancient, greenCards, blueCards, brownCards) {
  for (let key in ancient.firstStage) {
    if (key === "greenCards") {
      for (let i = 0; i < ancient.firstStage[key]; i++) {
        let randomNum = getRandomNum(0, greenCards.length - 1);
        if (!state.firstStage.includes(greenCards[randomNum])) {
          state.firstStage.push(greenCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "blueCards") {
      for (let i = 0; i < ancient.firstStage[key]; i++) {
        let randomNum = getRandomNum(0, blueCards.length - 1);
        if (!state.firstStage.includes(blueCards[randomNum])) {
          state.firstStage.push(blueCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "brownCards") {
      for (let i = 0; i < ancient.firstStage[key]; i++) {
        let randomNum = getRandomNum(0, brownCards.length - 1);
        if (!state.firstStage.includes(brownCards[randomNum])) {
          state.firstStage.push(brownCards[randomNum]);
        } else {
          i--;
        }
      }
    }
  }
  for (let key in ancient.secondStage) {
    if (key === "greenCards") {
      for (let i = 0; i < ancient.secondStage[key]; i++) {
        let randomNum = getRandomNum(0, greenCards.length - 1);
        if (!state.secondStage.includes(greenCards[randomNum])) {
          state.secondStage.push(greenCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "blueCards") {
      for (let i = 0; i < ancient.secondStage[key]; i++) {
        let randomNum = getRandomNum(0, blueCards.length - 1);
        if (!state.secondStage.includes(blueCards[randomNum])) {
          state.secondStage.push(blueCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "brownCards") {
      for (let i = 0; i < ancient.secondStage[key]; i++) {
        let randomNum = getRandomNum(0, brownCards.length - 1);
        if (!state.secondStage.includes(brownCards[randomNum])) {
          state.secondStage.push(brownCards[randomNum]);
        } else {
          i--;
        }
      }
    }
  }
  for (let key in ancient.thirdStage) {
    if (key === "greenCards") {
      for (let i = 0; i < ancient.thirdStage[key]; i++) {
        let randomNum = getRandomNum(0, greenCards.length - 1);
        if (!state.thirdStage.includes(greenCards[randomNum])) {
          state.thirdStage.push(greenCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "blueCards") {
      for (let i = 0; i < ancient.thirdStage[key]; i++) {
        let randomNum = getRandomNum(0, blueCards.length - 1);
        if (!state.thirdStage.includes(blueCards[randomNum])) {
          state.thirdStage.push(blueCards[randomNum]);
        } else {
          i--;
        }
      }
    } else if (key === "brownCards") {
      for (let i = 0; i < ancient.thirdStage[key]; i++) {
        let randomNum = getRandomNum(0, brownCards.length - 1);
        if (!state.thirdStage.includes(brownCards[randomNum])) {
          state.thirdStage.push(brownCards[randomNum]);
        } else {
          i--;
        }
      }
    }
  }
}

function changeNumbers() {
  firstStageNumbers.forEach((el) => (el.textContent = 0));
  secondStageNumbers.forEach((el) => (el.textContent = 0));
  thirdStageNumbers.forEach((el) => (el.textContent = 0));
  state.firstStage.forEach((el) => {
    switch (el.color) {
      case "green":
        firstStageNumbers[0].textContent =
          +firstStageNumbers[0].textContent + 1;
        break;
      case "brown":
        firstStageNumbers[1].textContent =
          +firstStageNumbers[1].textContent + 1;
        break;
      case "blue":
        firstStageNumbers[2].textContent =
          +firstStageNumbers[2].textContent + 1;
        break;
    }
  });
  state.secondStage.forEach((el) => {
    switch (el.color) {
      case "green":
        secondStageNumbers[0].textContent =
          +secondStageNumbers[0].textContent + 1;
        break;
      case "brown":
        secondStageNumbers[1].textContent =
          +secondStageNumbers[1].textContent + 1;
        break;
      case "blue":
        secondStageNumbers[2].textContent =
          +secondStageNumbers[2].textContent + 1;
        break;
    }
  });
  state.thirdStage.forEach((el) => {
    switch (el.color) {
      case "green":
        thirdStageNumbers[0].textContent =
          +thirdStageNumbers[0].textContent + 1;
        break;
      case "brown":
        thirdStageNumbers[1].textContent =
          +thirdStageNumbers[1].textContent + 1;
        break;
      case "blue":
        thirdStageNumbers[2].textContent =
          +thirdStageNumbers[2].textContent + 1;
        break;
    }
  });
}

function getCard() {
  if (state.firstStage.length !== 0) {
    let randomNum = getRandomNum(0, state.firstStage.length - 1);
    let currentCard = state.firstStage.splice(randomNum, 1);
    card.style.backgroundImage = `url('${currentCard[0].cardFace}')`;
    changeNumbers();
    if (state.firstStage.length === 0) {
      stages[0].classList.add("stage-remove");
    }
  } else if (state.secondStage.length !== 0) {
    let randomNum = getRandomNum(0, state.secondStage.length - 1);
    let currentCard = state.secondStage.splice(randomNum, 1);
    card.style.backgroundImage = `url('${currentCard[0].cardFace}')`;
    changeNumbers();
    if (state.secondStage.length === 0) {
      stages[1].classList.add("stage-remove");
    }
  } else if (state.thirdStage.length !== 0) {
    let randomNum = getRandomNum(0, state.thirdStage.length - 1);
    let currentCard = state.thirdStage.splice(randomNum, 1);
    card.style.backgroundImage = `url('${currentCard[0].cardFace}')`;
    changeNumbers();
    if (state.thirdStage.length === 0) {
      stages[2].classList.add("stage-remove");
      shirt.classList.add("shirt-deactive");
    }
  }
}

function activateShuffle() {
  if (state.ancient.length !== 0 && state.difficulty.length !== 0) {
    shuffle.classList.remove("shuffle-deactive");
  }
}

ancients.forEach((el) => {
  el.addEventListener("click", () => {
    ancients.forEach((el) => el.classList.remove("ancient-active"));
    state.ancient = el.id;
    el.classList.add("ancient-active");
    activateShuffle();
  });
});

difficultyItem.forEach((el) => {
  el.addEventListener("click", () => {
    difficultyItem.forEach((el) =>
      el.classList.remove("difficulty-item-active")
    );
    state.difficulty = el.id;
    el.classList.add("difficulty-item-active");
    activateShuffle();
  });
});

shuffle.addEventListener("click", getShuffle);
shirt.addEventListener("click", getCard);

console.log(
  "1. На выбор предоставляется четыре карты древнего (+20)\n2. На выбор предоставляется пять уровней сложности (+25)\n3. Карты замешиваются согласно правилам игры (+40)\n4. Есть трекер текущего состояния колоды (+20)\nИтого: +105"
);
