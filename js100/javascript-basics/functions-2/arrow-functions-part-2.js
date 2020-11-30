let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};


// arrow function
let initG = () => ({
  level: 1,
  score: 0  
});

  
let game = initGame();
let game2 = initG();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
console.log('Level: ' + game2.level);
console.log('score: ' + game2.score);