// This function counts the unique characters in a string of characters.

function getData(){
  return process.argv.slice(2);
}

function countLetters(list){
// return an object that is of the form of key , value
  var countList = Object.create(null);
  list.forEach(item => {countList[item] = countList[item] ? countList[item]+1 : 1});
  return countList;
}
var tmp  = getData();
//var str1 = ['lighthouse', 'in', 'the', 'house' ];
var str2 = tmp.join(""); // join the input data, taking the array items and instead of commas use " "
console.log('Input data: ',str2);
var res = str2.split('');  // turn the string into an array of letters.
console.log(res);
console.log(countLetters(res));