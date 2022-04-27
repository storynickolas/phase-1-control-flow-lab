function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let result;
  if(someNumber <= 400) {
    result = 'This one is on me!'
  }
  else if(someNumber > 400 && someNumber <= 2000) {
    result = 'That will be twenty bucks.'
  }
  else if(someNumber > 2000 && someNumber <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let response
  city == 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response
  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;    
  }
  return response
}