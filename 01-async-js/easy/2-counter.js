// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
var n=0;

function count(){
  console.log(n);
  n++;
  setTimeout(count,1000);
}
count();







































































// (Hint: setTimeout)
