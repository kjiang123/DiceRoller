var numDice = 0;
var numRolls = 0;

var checkDice2 = 0;
var checkDice2 = 0;
var checkDice3 = 0;


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
  let doubles = 0;
  let triples = 0;

  for (let i = 0; i < numRolls; i++) {
    let sum = 0;
    let lastRoll = 0;
    let doubleCount = 0;
    let tripleCount = 0;
    for (let j = 0; j < numDice; j++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
      if (roll === lastRoll) {
        doubleCount++;
        if (doubleCount === 1) {
          doubles++;
        } else if (doubleCount === 2) {
          doubles--;
          tripleCount++;
          triples++;
        }
      } else {
        doubleCount = 0;
      }
      lastRoll = roll;
    }
    rolls.push(sum);
  }


  // Calculate mean
  let mean = rolls.reduce((acc, val) => acc + val, 0) / rolls.length;
  mean = Math.round(mean * 100) / 100; // Round to the nearest hundredth  

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
  console.log(doubles);
  console.log(triples);

  let table = document.getElementById("Table");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = mean;
  cell2.innerHTML = median;
  cell3.innerHTML = mode[0];
  cell4.innerHTML = doubles;
  cell5.innerHTML = triples;
}

function resetTable(){
  location.reload();
}

