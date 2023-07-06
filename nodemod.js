// var butt=document.getElementById("b1")
// butt.onclick(function(){

// });
// const fs =require('fs')
// fs.readFile('./mydata.txt','utf-8',function(err,data){
//     if(err)
//         console.assert(err);
//     console.log(data);
// })


// Create a button element
var button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

// Create a div element to display the data
var dataContainer = document.createElement('div');
document.body.appendChild(dataContainer);

// Add event listener to the button
button.addEventListener('click', function() {
  // Fetch data from the file
  fetch('./mydata.txt')
    .then(response => response.text())
    .then(data => {
      // Display the data
      dataContainer.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
