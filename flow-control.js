var basicTeenager = function(age) {
  if (age >= 13 && age <= 19 ) {
    return "You are a teenager!"
  }
}

var teenager = function(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  } else{
    return "You are not a teenager";
  }
}

var ageChecker = function(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  } elseif (age <= 12){
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

var ternaryTeenager = function(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager";
  } else {
    return "You are not a teenager";
  }
}

var switchAge = function(age) {
  switch (age) {
    case 13:
      return "You are a teenager";
      break;
    case 14:
      return "You are a teenager";
      break;
    case 15:
      return "You are a teenager";
      break;
    case 16:
      return "You are a teenager";
      break;
    case 17:
      return "You are a teenager";
      break;
    case 18:
      return "You are a teenager";
      break;
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
