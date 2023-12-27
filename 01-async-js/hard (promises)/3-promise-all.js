/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
    let promise1 =new Promise(function(resolve,reject){
        setTimeout(function(){
            return resolve('done')
        },t1);
    })

    return promise1;

}

function wait2(t2) {
    let promise2=new Promise(function(resolve,reject){
        setTimeout(function(){
            return resolve('done')
        },t2);
    })
    return promise2;

}

function wait3(t3) {
    let promise3=new Promise(function(resolve,reject){
        setTimeout(function(){
            return resolve('done')
        },t3)
    })
    return promise3;
}



function calculateTime(t1, t2, t3) {
   const startTime =  new Date().getTime();
  let array=[wait1(1000),wait2(2000),wait3(3000)];
    Promise.all(array).then(function(values){
        console.log("All promises are resolved.",values)
        const endTime =  new Date().getTime();

      const elapsedTime = endTime - startTime;
       console.log(elapsedTime/1000)
    })
    
      
  

}
calculateTime();


module.exports = calculateTime;
