var numDice = 0;
var numRolls = 0;

function setDice1(){
    numDice = 1;
}

function setDice2(){
    numDice = 2;
}

function setDice3(){
    numDice = 3;
}

function submit(){
   numRolls = document.getElementById('numRolls').value;
   console.log(numRolls);
}

function rollDice() {
  // Roll dice and store the results
  let rolls = [];
  for (let i = 0; i < numRolls; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
    }
    rolls.push(sum);
  }

  // Calculate mean
  let mean = rolls.reduce((acc, val) => acc + val, 0) / rolls.length;

  // Calculate median
  let sortedRolls = rolls.sort((a, b) => a - b);
  let midIndex = Math.floor(sortedRolls.length / 2);
  let median = sortedRolls.length % 2 === 0 ? (sortedRolls[midIndex - 1] + sortedRolls[midIndex]) / 2 : sortedRolls[midIndex];

  // Calculate mode
  let modeMap = {};
  let maxCount = 0;
  let mode = [];
  for (let roll of rolls) {
    if (!modeMap[roll]) {
      modeMap[roll] = 1;
    } else {
      modeMap[roll]++;
    }
    if (modeMap[roll] > maxCount) {
      maxCount = modeMap[roll];
      mode = [roll];
    } else if (modeMap[roll] === maxCount) {
      mode.push(roll);
    }
  }
  console.log(rolls);
  console.log(mean);
  console.log(median);
  console.log(mode);

  return {
    rolls,
    mean,
    median,
    mode
  };
}