// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs=require("fs")
fs.readFile("a.txt","utf-8",function(err,data){
  if(err){
    console.log(err);
  }
  else{

    console.log("New data is ",data.replace(/\s+/g,' '));
    
  }

})


// Method 2
// const fs=require('fs');
// const filePath='a.txt';


// fs.readFile(filePath,'utf-8',function(err,data){
//   if(err){
//     console.log('Error reading the file,err');
//     return;
//   }

// var data2=data.replace(/\s+/g, ' ');
// console.log('File content: ',data);
// });

// fs.readFile(filePath,'utf-8',function(err,data){
// if(err){
//   console.log('Error reading the file,err');
//   return;
// }
//   console.log("Final file content: ",data.replace(/\s+/g, ' '));;
// });
