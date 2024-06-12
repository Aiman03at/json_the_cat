////Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.
const needle=require("needle");
////using readLine to take input

var readline = require('readline');
let breed;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fetcher =() =>{

rl.question("Enter breed name  ---", (input) => {
  breed =input;

  needle.get('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const content=body;
    for ( c of content) {
      if (c.name === breed) {
        console.log(c.description);
        break;
      }
      
    }
    console.log ("Breed not found");
});


});

}
fetcher();