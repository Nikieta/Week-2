// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');
const filePath='a.txt';


fs.writeFile(filePath,"Nikieta",'utf-8',function(err,data){
if(err){
  console.error('Error reading the file,err');
  return;
}
  console.log("Data Written");;

});


fs.readFile(filePath,'utf-8',function(err,data){
  if(err){
    console.log('Error reading the file,err');
    return;
  }

  console.log("Final file content: ",data);;


});

