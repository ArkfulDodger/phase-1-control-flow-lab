function scuberGreetingForFeet(num){
  if (num <= 400) {
    return "This one is on me!";
  } else if (num > 2500) {
    return "No can do.";
  } else if (num > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(amount){
  if (amount === 'generous') {
    return 'Thank you so much.';
  } else if (amount === 'not as generous') {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}