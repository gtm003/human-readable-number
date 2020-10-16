module.exports = function toReadable (number) {
    const configDecades  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const configUnits  = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const configTeen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let str = '';
  if (number == 0) str += 'zero';
    while (number > 0) {
      if (number >= 100) {
      str += configUnits[Math.floor(number / 100)] + ' hundred';
      number = number % 100;
    } else if ( number >= 20) {
    str += ' ' + configDecades[Math.floor(number / 10)-2];
    number = number % 10; 
    } else if (number <= 10) {
    str += ' ' + configUnits[number];
    number = 0;
    } else {
    str += ' ' + configTeen[number % 10 - 1];
    number = 0;
    }
  }
  return str.trim();
}
