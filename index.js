function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase();
  var lowerCase = string.toLowerCase();
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  } else if (string === lowerCase) {
    return 'I can\'t hear you!';
  } else if (string === upperCase) {
    return 'YES INDEED!';
  }
}