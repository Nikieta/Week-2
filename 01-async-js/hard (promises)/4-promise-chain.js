/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  function waitTwoSecond() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  function waitThreeSecond() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  async function calculateTime() {
    const startTime = new Date().getTime();
  
    await waitOneSecond();
    await waitTwoSecond();
    await waitThreeSecond();
  
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
  
    console.log('Execution done');
    console.log(`Time taken for sequential execution: ${elapsedTime} seconds`);
  }
  
  calculateTime();
calculateTime();

module.exports = calculateTime;
// All promises are resolved. [ 'done', 'done', 'done' ]
// 3.043