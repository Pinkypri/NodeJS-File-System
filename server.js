const express = require('express');
const app = express();
app.use('/images', express.static('images'));
const fs=require('fs');
const timeStamp= Date.now();
const now = new Date(timeStamp);
const logfile_name = 'C:/Users/Priya/Documents/nodejs-textfile/' + now.getFullYear() + "-"+(now.getMonth()+1) + "-" + now.getDate() +" "+now.getHours() + "-" + now.getMinutes() +"-"+now.getSeconds()+"-"+now.getMilliseconds()+'.txt';
const time=now.getHours() + "-" + now.getMinutes() +"-"+now.getSeconds()+"-"+now.getMilliseconds();

app.get('/set', (req, res) => {

    fs.open(logfile_name, 'w', function (err) {
    if (err) throw err;
    res.write('<p>File is created successfully.</p>')
    console.log("File is created successfully.")
  
    fs.writeFile(logfile_name,time,function (err) {
    if (err) throw err;
    console.log("File content created successfully.");
    res.write('<p>File content created successfully.</p>')

    let directory_name ='C:/Users/Priya/Documents/nodejs-textfile/';
    let filenames = fs.readdirSync(directory_name);
  
    console.log("\nFilenames in directory:");
    filenames.forEach((file) => {
    res.write('<div style="display:flex; align-items:center;"><img src ="./images/textFile.png" width="20px"/><p style="padding-left:5px">'+file+'</p></div>')
    console.log("File:",file);
    });
     
  })
  
})
     
})


  app.listen(5000, () => {
    console.log("server has been runned port on 5000")
  });

