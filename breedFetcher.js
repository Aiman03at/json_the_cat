////Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.
const needle=require("needle");



const fetchBreedDescription = function(breed, callback) {
  
  needle.get('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      return callback(new Error(`Failed to fetch breed. Status code: ${response.statusCode}`), null);
    }

    const content = body;
    
    for (const c of content) {
      if (c.name === breed) {
        return callback(null, c.description);
      }
    }

    callback("Breed not found", null);
  });
};

  
module.exports=fetchBreedDescription;



