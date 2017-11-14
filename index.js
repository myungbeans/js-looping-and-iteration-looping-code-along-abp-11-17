// Code your solutions in this file
function printBadges(arrayNames){
  for(let i =0; i < arrayNames.length; i++){
    //i //represent the index
    // arrayNames[i] //represent the element
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames
}

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
  while(coinToss()){
      console.log("Tails!!!")
      counter++
    }
    return(`You got ${counter} tails in a row!`)
  }
